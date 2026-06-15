import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Input-uyOH1EWa.js";import{n as i,t as a}from"./Button-DuMpLdtG.js";var o=e((()=>{}));function s({title:e,children:t,onSubmit:n,bottomLink:r,progress:i,ref:a}){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`form`,{ref:a,onSubmit:n,className:`authForm__card`,children:[(0,c.jsx)(`h2`,{className:`authForm__title`,children:e}),(0,c.jsx)(`div`,{className:`authForm__fields`,children:t}),(0,c.jsx)(`div`,{className:`authForm__bottom`,children:r})]}),(0,c.jsx)(`div`,{className:`progress_bar`,children:(0,c.jsx)(`div`,{className:`filled`,style:{transform:`translateX(${i}%)`}})})]})}var c,l=e((()=>{o(),c=t(),s.__docgenInfo={description:``,methods:[],displayName:`AuthForm`,props:{title:{required:!0,tsType:{name:`string`},description:``},onSubmit:{required:!0,tsType:{name:`FormEventHandler`,elements:[{name:`HTMLFormElement`}],raw:`FormEventHandler<HTMLFormElement>`},description:``},bottomLink:{required:!0,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},progress:{required:!0,tsType:{name:`number`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLFormElement`}],raw:`Ref<HTMLFormElement>`},description:``}}}})),u,d,f,p,m;e((()=>{l(),n(),i(),u=t(),d={title:`AuthForm`,component:s,parameters:{layout:`centered`}},f={args:{title:`Welcome back`,progress:100,bottomLink:(0,u.jsxs)(`p`,{children:[`Don't have an account? `,(0,u.jsx)(`a`,{href:`#`,children:`Sign up`})]}),onSubmit:e=>{e.preventDefault(),alert(`Submitted`)}},render:e=>(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(r,{placeholder:`Email`,type:`email`}),(0,u.jsx)(r,{placeholder:`Password`,type:`password`}),(0,u.jsx)(a,{type:`submit`,variant:`primary`,size:`medium`,children:`Log in`})]})},p={args:{title:`Create account`,progress:50,bottomLink:(0,u.jsxs)(`p`,{children:[`Already have an account? `,(0,u.jsx)(`a`,{href:`#`,children:`Log in`})]}),onSubmit:e=>{e.preventDefault(),alert(`Submitted`)}},render:e=>(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(r,{placeholder:`Name`}),(0,u.jsx)(r,{placeholder:`Email`,type:`email`}),(0,u.jsx)(r,{placeholder:`Password`,type:`password`}),(0,u.jsx)(a,{type:`submit`,variant:`primary`,size:`medium`,children:`Sign up`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Welcome back",
    progress: 100,
    bottomLink: <p>
                Don&apos;t have an account? <a href="#">Sign up</a>
            </p>,
    onSubmit: e => {
      e.preventDefault();
      alert("Submitted");
    }
  },
  render: args => <AuthForm {...args}>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" variant="primary" size="medium">
                Log in
            </Button>
        </AuthForm>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Create account",
    progress: 50,
    bottomLink: <p>
                Already have an account? <a href="#">Log in</a>
            </p>,
    onSubmit: e => {
      e.preventDefault();
      alert("Submitted");
    }
  },
  render: args => <AuthForm {...args}>
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" variant="primary" size="medium">
                Sign up
            </Button>
        </AuthForm>
}`,...p.parameters?.docs?.source}}},m=[`Login`,`Register`]}))();export{f as Login,p as Register,m as __namedExportsOrder,d as default};