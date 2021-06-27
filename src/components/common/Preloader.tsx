import styles from "./Preloader.module.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Preloader = () => {
  return <Spin indicator={<LoadingOutlined className={styles.spin} />} />;
};

export default Preloader;
