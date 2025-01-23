import { useEffect } from "react";

export const ScrollToTop = ({ children }) => {

    useEffect(() => {
        
        const handleLocationChange = () => document.documentElement.scrollTo(0, 0);

        window.addEventListener("popstate", handleLocationChange);

        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            originalPushState.apply(this, args);
            handleLocationChange();
        };

        history.replaceState = function (...args) {
            originalReplaceState.apply(this, args);
            handleLocationChange();
        };

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;
        };
    }, []);

    return children;
};