import styles from "./ImageWrapper.module.sass";

function ImageWrapper({ children, width, height, ...restProps }) {
  const containerStyles = { width, height };

  return (
    <div
      {...restProps}
      style={containerStyles}
      className={styles.imageComtainer}
    >
      {children}
    </div>
  );
}

export default ImageWrapper;
