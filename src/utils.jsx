

export const checkTokenExpiration = () => {
    const accessTokenExpiry = localStorage.getItem("accessTokenExpiry");
    const refreshTokenExpiry = localStorage.getItem("refreshTokenExpiry");
    

    const now = Date.now();

    if (accessTokenExpiry && now > accessTokenExpiry) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("accessTokenExpiry");
    }
  
    if (refreshTokenExpiry && now > refreshTokenExpiry) {
      localStorage.clear();
    }
  };
  