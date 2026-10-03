import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  GraduationCap,
  User,
  ShoppingCart,
} from "lucide-react";

import { getCart } from "../../services/cartService";
import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [accountPath, setAccountPath] = useState("/login");

  // -------------------------------------------------------
  // Where the Account tab leads (guest -> login, else dashboard)
  // Same role logic as Header.jsx
  // -------------------------------------------------------
  const resolveAccountPath = () => {
    const token = localStorage.getItem("token");
    const loggedIn =
      Boolean(token) || localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) return "/login";

    try {
      const userData = localStorage.getItem("user");
      if (!userData) return "/customer-dashboard";

      const user = JSON.parse(userData);

      if (
        String(user?.role).toUpperCase() === "CUSTOMER" &&
        String(user?.customerType).toUpperCase() === "BUSINESS"
      ) {
        return "/corporate-dashboard";
      }

      const role = String(
        user?.role || user?.userRole || user?.type || ""
      ).toUpperCase();

      switch (role) {
        case "ADMIN":
          return "/admin-dashboard";
        case "INVENTORY":
        case "INVENTORY_MANAGER":
          return "/inventory-dashboard";
        case "RECEPTIONIST":
          return "/receptionist-dashboard";
        case "TECHNICIAN":
          return "/technician-dashboard";
        case "ACCOUNTANT":
          return "/accountant-dashboard";
        default:
          return "/customer-dashboard";
      }
    } catch (error) {
      return "/customer-dashboard";
    }
  };

  // -------------------------------------------------------
  // Cart badge (same events Header.jsx listens to)
  // -------------------------------------------------------
  const loadCartCount = async () => {
    if (!localStorage.getItem("token")) {
      setCartCount(0);
      return;
    }

    try {
      const response = await getCart();

      const cartData = response?.data || response?.cart || response;

      const items = Array.isArray(cartData?.data?.items)
        ? cartData.data.items
        : Array.isArray(cartData?.items)
        ? cartData.items
        : Array.isArray(cartData?.cartItems)
        ? cartData.cartItems
        : Array.isArray(cartData)
        ? cartData
        : [];

      setCartCount(items.length);
    } catch (error) {
      console.error("BOTTOM NAV CART COUNT ERROR:", error);
    }
  };

  useEffect(() => {
    const refresh = () => {
      setAccountPath(resolveAccountPath());
      loadCartCount();
    };

    refresh();

    window.addEventListener("cart-updated", refresh);
    window.addEventListener("authChanged", refresh);

    return () => {
      window.removeEventListener("cart-updated", refresh);
      window.removeEventListener("authChanged", refresh);
    };
  }, [location.pathname]);

  // Adds a body class so the page gets bottom spacing only
  // while the bottom nav is on screen
  useEffect(() => {
    document.body.classList.add("has-bottom-nav");

    return () => {
      document.body.classList.remove("has-bottom-nav");
    };
  }, []);

  const path = location.pathname;

  const tabs = [
    {
      label: "Home",
      icon: Home,
      to: "/",
      active: path === "/",
    },
    {
      label: "Categories",
      icon: LayoutGrid,
      to: "/shop",
      active: path.startsWith("/shop"),
    },
    {
      label: "Rent",
      icon: GraduationCap,
      to: "/rental",
      active: path.startsWith("/rental") || path.startsWith("/my-rentals"),
    },
    {
      label: "Account",
      icon: User,
      to: accountPath,
      active:
        path === "/login" ||
        path === "/register" ||
        path === "/customer-dashboard" ||
        path.startsWith("/corporate-dashboard"),
    },
    {
      label: "Cart",
      icon: ShoppingCart,
      to: "/cart",
      active: path === "/cart",
      badge: cartCount,
    },
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {tabs.map(({ label, icon: Icon, to, active, badge }) => (
        <NavLink
          key={label}
          to={to}
          className={`bottom-nav-item${active ? " active" : ""}`}
        >
          <span className="bottom-nav-icon">
            <Icon size={22} aria-hidden="true" />

            {badge > 0 && (
              <span className="bottom-nav-badge">
                {badge > 99 ? "99+" : badge}
              </span>
            )}
          </span>

          <span className="bottom-nav-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}