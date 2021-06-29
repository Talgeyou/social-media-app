import styles from "./Preloader.module.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Preloader = (props: { classNames?: any }) => {
  return (
    <Spin
      className={props.classNames}
      indicator={<LoadingOutlined className={styles.spin} />}
    />
  );
};

export default Preloader;
