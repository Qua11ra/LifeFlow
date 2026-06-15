import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n}from"./iframe-_wx3Gaco.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,r as a,t as o}from"./VisibilityIcon-DVVdTdMN.js";var s=e((()=>{}));function c({error:e,className:t,...n}){let[r,a]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{className:`passwordWrapper`,children:[(0,u.jsxs)(`div`,{className:`passwordField${e?` error`:``}`,children:[(0,u.jsx)(`input`,{type:r?`text`:`password`,className:`passwordInput`,...n}),(0,u.jsx)(`button`,{type:`button`,className:`visibilityButton`,onClick:()=>a(e=>!e),"aria-label":r?`Hide password`:`Show password`,children:r?(0,u.jsx)(o,{}):(0,u.jsx)(i,{})})]}),e&&(0,u.jsx)(`p`,{className:`errorMessage`,children:e})]})}var l,u,d=e((()=>{l=t(n(),1),s(),a(),u=r(),c.__docgenInfo={description:``,methods:[],displayName:`PasswordInput`,props:{error:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``}},composes:[`Omit`]}})),f,p,m,h,g,_;e((()=>{d(),f={title:`PasswordInput`,component:c,parameters:{layout:`centered`},args:{placeholder:`Enter password`}},p={},m={args:{defaultValue:`secret123`}},h={args:{error:`Password must be at least 8 characters`}},g={args:{disabled:!0,defaultValue:`secret123`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "secret123"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Password must be at least 8 characters"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "secret123"
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithValue`,`WithError`,`Disabled`]}))();export{p as Default,g as Disabled,h as WithError,m as WithValue,_ as __namedExportsOrder,f as default};