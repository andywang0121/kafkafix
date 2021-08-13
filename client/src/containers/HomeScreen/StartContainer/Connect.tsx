import React, { FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Typography, Input } from "@material-ui/core";

import { KafkaState } from "../../../state/reducers/kafkaDataReducer";
import { RootState } from "../../../state/reducers";
import {
  connectedActionCreator,
  disconnectedActionCreator,
  populateNotifActionCreator,
} from "../../../state/actions/kafkaActionCreators";
import { populateData } from "../../../helperFunctions/populateData";

export const Connect: FC = () => {
  const isConnected = useSelector<RootState, KafkaState["isConnected"]>(
    (state) => state.kafka.isConnected
  );

  const dispatch = useDispatch();
  const inputPort = useRef<HTMLInputElement>(null);

  const handleConnect = () => {
    if (inputPort.current !== null) {
      // const inputElement: HTMLInputElement = inputPort.current.children[0];
      const PORT = inputPort.current.value;
      console.log("PORT value is ", PORT);

      if (!PORT.length) return alert("Port cannnot be empty");

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ PORT }),
      };

      fetch("http://localhost:8080/api/connect", options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (!data.ok) throw new Error(data);
          // if (inputPort.current !== null) inputPort.current.disabled = true;
          //set up websocket connection here
          // const ws = new WebSocket("ws://localhost:3000");
          // ws.onopen = () => {
          //   console.log("connected to websocket");
          // };
          // ws.onmessage = (data) => {
          //   console.log("error message received:", data);
          // };
          dispatch(connectedActionCreator());
          populateData(data, dispatch);
          // change backend to also send the error messages
          // dispatch(populateNotifActionCreator(data.errors));
        })
        .catch((e) => console.log(e));
    }
  };

  const handleDisconnect = () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3000/api/disconnect", options)
      .then((data) => data.json())
      .then((data) => {
        dispatch(disconnectedActionCreator());
      })
      .catch((e) => console.log(e));
  };

  return (
    <React.Fragment>
      <Card className="card">
        <Typography variant="subtitle1" className="title">
          Enter Your Broker Port Number
        </Typography>
        <Input
          id="brokerID"
          name="brokerID"
          type="number"
          placeholder="9092"
          inputRef={inputPort}
          // required={true}
          autoFocus={true}
        />
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={() => (isConnected ? handleDisconnect() : handleConnect())}
        >
          {isConnected ? "Disconnect" : "Connect"}
        </Button>
      </Card>
    </React.Fragment>
  );
};
