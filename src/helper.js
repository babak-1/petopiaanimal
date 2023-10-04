const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

export { logout };
