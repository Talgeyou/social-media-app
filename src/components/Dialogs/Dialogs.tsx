import { Card, Layout, List } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, Route } from "react-router-dom";
import styles from "./Dialogs.module.scss";
import Messages from "./Messages/Messages";

export interface DialogsProps {
  dialogs?: Array<{
    id: number;
    user: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    messages?: Array<{
      id: number;
      author: {
        id: number;
        name: string;
        imgUrl?: string;
      };
      body: string;
    }>;
  }>;
}

const Dialogs = (props: DialogsProps) => {
  if (props.dialogs) {
    return (
      <Layout>
        <div className={styles.dialogsWrapper}>
          <List
            grid={{ gutter: 16, column: 1 }}
            itemLayout="horizontal"
            dataSource={props.dialogs}
            renderItem={(dialog) => {
              return (
                <Link to={`/dialogs/${dialog.user.id}`}>
                  <List.Item>
                    <Card title={dialog.user.name}>
                      {dialog.messages && dialog.messages.length > 0
                        ? dialog.messages[0].body
                        : ""}
                    </Card>
                  </List.Item>
                </Link>
              );
            }}
          />
          <div>
            {props.dialogs.map((dialog) => {
              return (
                <Route
                  exact
                  path={`/dialogs/${dialog.user.id}`}
                  render={() =>
                    dialog.messages ? (
                      <Messages messages={dialog.messages} />
                    ) : (
                      ""
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
  return <Title>There is no dialogs</Title>;
};

export default Dialogs;
