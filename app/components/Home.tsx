import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid} from "@material-ui/core";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";

const useStyles = makeStyles({
  iframe: {
    width: "100%",
    height: "100vh"
  },
  editor: {
    width: "100%"
  }
});

export default function Home(): JSX.Element {

  const classes = useStyles();
  const iframeRef: any = useRef();

  const [state, setState] = useState({
    html: "",
    javascript: "",
    css: ""
  });

  const onHtmlChange = (val:any) => {
      setState({...state, html: val})
  }

  const onJavascriptChange = (val:any) => {
    setState({...state, javascript: val})
  }

  const onCssChange = (val:any) => {
    setState({...state, css: val})
  }

  const renderCode = () => {
    // @ts-ignore
    const doc = document.getElementById("iframe").contentDocument;
    doc.head.innerHTML =  doc.head.innerHTML + `<style>${state.css}</style>` ;
    // if(iframeRef.current) {
    //   iframeRef.current.src = 'data:text/html;charset=utf-8,' + encodeURI(state.html);
    // }
    // if(iframeRef.current) {
    //   const doc = iframeRef.current.contentDocument;
    //   doc.head.innerHTML =  doc.head.innerHTML + `<style>${state.css}</style>` ;
    //   iframeRef.current.src = 'data:text/html;charset=utf-8,' + encodeURI(state.html) ;
    // }
  }


  return (
    <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
      <Grid item xs={4}>
        <AceEditor onChange={onHtmlChange}
                   value={state.html}
                   width={"100%"}
                   mode={"html"}
                   theme={"monokai"}
        />
      </Grid>
      <Grid item xs={4}>
        <AceEditor onChange={onJavascriptChange}
                   value={state.javascript}
                   width={"100%"}
                   mode={"javascript"}
                   theme={"monokai"}
        />
      </Grid>
      <Grid item xs={4}>
        <AceEditor onChange={onCssChange}
                   value={state.css}
                   width={"100%"}
                   mode={"css"}
                   theme={"monokai"}
        />
      </Grid>
      <Button onClick={renderCode}> Render Code</Button>
      <iframe id="iframe" ref={iframeRef} className={classes.iframe}></iframe>
    </Grid>
  );
}
