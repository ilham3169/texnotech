import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Head from "../Header/Head";
import Footer from "../Footer/Footer";
import { FaBoxOpen, FaWallet, FaCreditCard, FaCheck } from "react-icons/fa";


function PaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;

      const username = import.meta.env.VITE_KAPITAL_USERNAME;
      const password = import.meta.env.VITE_KAPITAL_PASSWORD;
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

      try {
        const res = await fetch(
          `https://e-commerce.kapitalbank.az/api/order/${orderId}?tranDetailLevel=1`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": authHeader,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Error from Kapital API: ${res.status}`);
        }

        const kapitalData = await res.json();
        setOrder(kapitalData.order);
      } catch (error) {
        console.error("Error fetching Kapital Bank order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "text-green-600";
      case "declined":
        return "text-red-600";
      case "preparing":
        return "text-yellow-600";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Head />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full">
          {loading ? (
            <p className="text-center text-lg font-medium">
              <FaCheck className="text-green-500 mb-4" size={40} />
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ textAlign: "center !important" }}>
                Sifarişiniz Uğurla Qəbul Edildi!
              </h2>
              <p className="text-gray-700 mb-4 text-sm" style={{ textAlign: "center !important", marginBottom: "10px"}}>
                Tezliklə sizinlə ətraflı məlumat üçün əlaqə saxlayacayıq.
              </p>
            </p>
          ) : !order ? (
            <p className="text-center text-red-500 font-semibold">Sifariş Tapılmadı</p>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">Sifariş Məlumatları</h2>
              <div className="space-y-3 text-lg">
                <p><strong>Sifariş ID:</strong> {order.id}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={getStatusColor(order.status)}>{order.status}</span>
                </p>
                {/* <p><strong>Previous Status:</strong> {order.prevStatus}</p> */}
                <p><strong>Məbləğ:</strong> {order.amount} {order.currency}</p>
                <p><strong>Tarix:</strong> {order.createTime}</p>
                {/* <p><strong>Finished At:</strong> {order.finishTime}</p> */}
                {/* <p><strong>Type:</strong> {order.type?.title || "—"}</p> */}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PaymentStatusPage;
