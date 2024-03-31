import { NavLink } from "react-router-dom";

const HeaderLink = () => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Home
      </NavLink>
    </>
  );
};

export default HeaderLink;
