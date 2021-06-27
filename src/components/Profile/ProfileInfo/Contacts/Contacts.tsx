import styles from "./Contacts.module.scss";
import {
  CloudOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Contacts = (props: any) => {
  const addHttps = (url: string) => {
    if (url.indexOf("http://") !== 0 || url.indexOf("https://") !== 0) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className={styles.contacts}>
      {props.facebook ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.facebook)}`}
        >
          <FacebookOutlined />
        </a>
      ) : (
        ""
      )}
      {props.website ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.website)}`}
        >
          <CloudOutlined />
        </a>
      ) : (
        ""
      )}
      {props.vk ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.vk)}`}
        >
          VK
        </a>
      ) : (
        ""
      )}
      {props.twitter ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.twitter)}`}
        >
          <TwitterOutlined />
        </a>
      ) : (
        ""
      )}
      {props.instagram ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.instagram)}`}
        >
          <InstagramOutlined />
        </a>
      ) : (
        ""
      )}
      {props.youtube ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.youtube)}`}
        >
          <YoutubeOutlined />
        </a>
      ) : (
        ""
      )}
      {props.github ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.github)}`}
        >
          <GithubOutlined />
        </a>
      ) : (
        ""
      )}
      {props.mainLink ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(props.mainLink)}`}
        >
          <LinkOutlined />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contacts;
