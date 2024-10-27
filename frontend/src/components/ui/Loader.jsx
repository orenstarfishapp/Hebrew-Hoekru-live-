import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { DotLoader, PuffLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loader = ({ loading, color = "green", size = 150, type = "clip" }) => {
  return (
    <div className="sweet-loading">
      {type === "hash" ? (
        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default Loader;