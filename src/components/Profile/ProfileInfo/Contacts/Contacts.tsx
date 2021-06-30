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

interface Props {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
}

const Contacts = ({
  facebook,
  website,
  vk,
  twitter,
  instagram,
  youtube,
  github,
  mainLink,
}: Props) => {
  const addHttps = (url: string) => {
    if (url.indexOf("http://") !== 0 || url.indexOf("https://") !== 0) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className={styles.contacts}>
      {facebook ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(facebook)}`}
        >
          <FacebookOutlined />
        </a>
      ) : (
        ""
      )}
      {website ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(website)}`}
        >
          <CloudOutlined />
        </a>
      ) : (
        ""
      )}
      {vk ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(vk)}`}
        >
          VK
        </a>
      ) : (
        ""
      )}
      {twitter ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(twitter)}`}
        >
          <TwitterOutlined />
        </a>
      ) : (
        ""
      )}
      {instagram ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(instagram)}`}
        >
          <InstagramOutlined />
        </a>
      ) : (
        ""
      )}
      {youtube ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(youtube)}`}
        >
          <YoutubeOutlined />
        </a>
      ) : (
        ""
      )}
      {github ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(github)}`}
        >
          <GithubOutlined />
        </a>
      ) : (
        ""
      )}
      {mainLink ? (
        <a
          className={styles.contact}
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={`${addHttps(mainLink)}`}
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
