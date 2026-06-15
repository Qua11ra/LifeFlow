import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./LifeFlowLogo-C1eIyJEF.js";var i=e((()=>{}));function a({title:e,onGoBack:t,onRefresh:n,themeSwitcher:r,logo:i,goBackLabel:a=`Go back`,refreshLabel:s=`Refresh page`}){return(0,o.jsxs)(`main`,{className:`errorFallback__section`,children:[i,(0,o.jsxs)(`section`,{className:`errorFallback__info`,children:[(0,o.jsx)(`h1`,{children:e}),(0,o.jsxs)(`div`,{className:`errorFallback__buttons`,children:[t&&(0,o.jsx)(`button`,{type:`button`,onClick:t,children:a}),n&&(0,o.jsx)(`button`,{type:`button`,onClick:n,children:s})]}),r]})]})}var o,s=e((()=>{i(),o=t(),a.__docgenInfo={description:``,methods:[],displayName:`ErrorFallback`,props:{title:{required:!0,tsType:{name:`string`},description:``},onGoBack:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onRefresh:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},themeSwitcher:{required:!1,tsType:{name:`ReactNode`},description:``},logo:{required:!1,tsType:{name:`ReactNode`},description:``},goBackLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Go back"`,computed:!1}},refreshLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Refresh page"`,computed:!1}}}}})),c,l,u,d,f,p;e((()=>{s(),n(),c=t(),l={title:`ErrorFallback`,component:a,parameters:{layout:`fullscreen`},args:{title:`Something went wrong`}},u={args:{onGoBack:()=>alert(`Go back`),onRefresh:()=>alert(`Refresh`)}},d={args:{onGoBack:()=>alert(`Go back`),onRefresh:()=>alert(`Refresh`),logo:(0,c.jsx)(r,{src:`/icons/LifeFlow-full_logo.png`,alt:`LifeFlow`,size:`small`})}},f={args:{onRefresh:()=>alert(`Refresh`)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onGoBack: () => alert("Go back"),
    onRefresh: () => alert("Refresh")
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onGoBack: () => alert("Go back"),
    onRefresh: () => alert("Refresh"),
    logo: <LifeFlowLogo src="/icons/LifeFlow-full_logo.png" alt="LifeFlow" size="small" />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onRefresh: () => alert("Refresh")
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithLogo`,`Minimal`]}))();export{u as Default,f as Minimal,d as WithLogo,p as __namedExportsOrder,l as default};