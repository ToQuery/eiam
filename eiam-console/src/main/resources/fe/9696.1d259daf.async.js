/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[9696],{79696:function(ve,G,p){p.d(G,{Z:function(){return be}});var W=p(68591),m=p.n(W),o=p(79685),b=p(56865),y=p(8779),x=e=>{const{prefixCls:t,className:n,style:l,size:a,shape:i}=e,c=m()({[`${t}-lg`]:a==="large",[`${t}-sm`]:a==="small"}),r=m()({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),s=o.useMemo(()=>typeof a=="number"?{width:a,height:a,lineHeight:`${a}px`}:{},[a]);return o.createElement("span",{className:m()(t,c,r,n),style:Object.assign(Object.assign({},s),l)})},X=p(25646),F=p(83396),q=p(42006);const V=new X.E4("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),j=e=>({height:e,lineHeight:`${e}px`}),f=e=>Object.assign({width:e},j(e)),J=e=>({position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:V,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}),w=e=>Object.assign({width:e*5,minWidth:e*5},j(e)),K=e=>{const{skeletonAvatarCls:t,color:n,controlHeight:l,controlHeightLG:a,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},f(l)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(a)),[`${t}${t}-sm`]:Object.assign({},f(i))}},Q=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:l,controlHeightLG:a,controlHeightSM:i,color:c}=e;return{[`${l}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:n},w(t)),[`${l}-lg`]:Object.assign({},w(a)),[`${l}-sm`]:Object.assign({},w(i))}},A=e=>Object.assign({width:e},j(e)),U=e=>{const{skeletonImageCls:t,imageSizeBase:n,color:l,borderRadiusSM:a}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:l,borderRadius:a},A(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},A(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},P=(e,t,n)=>{const{skeletonButtonCls:l}=e;return{[`${n}${l}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${l}-round`]:{borderRadius:t}}},I=e=>Object.assign({width:e*2,minWidth:e*2},j(e)),Y=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:l,controlHeightLG:a,controlHeightSM:i,color:c}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:l*2,minWidth:l*2},I(l))},P(e,l,n)),{[`${n}-lg`]:Object.assign({},I(a))}),P(e,a,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},I(i))}),P(e,i,`${n}-sm`))},_=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:l,skeletonParagraphCls:a,skeletonButtonCls:i,skeletonInputCls:c,skeletonImageCls:r,controlHeight:s,controlHeightLG:g,controlHeightSM:d,color:u,padding:$,marginSM:R,borderRadius:h,skeletonTitleHeight:z,skeletonBlockRadius:E,skeletonParagraphLineHeight:k,controlHeightXS:S,skeletonParagraphMarginTop:O}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:$,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:u},f(s)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},f(g)),[`${n}-sm`]:Object.assign({},f(d))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${l}`]:{width:"100%",height:z,background:u,borderRadius:E,[`+ ${a}`]:{marginBlockStart:d}},[`${a}`]:{padding:0,"> li":{width:"100%",height:k,listStyle:"none",background:u,borderRadius:E,"+ li":{marginBlockStart:S}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${l}, ${a} > li`]:{borderRadius:h}}},[`${t}-with-avatar ${t}-content`]:{[`${l}`]:{marginBlockStart:R,[`+ ${a}`]:{marginBlockStart:O}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Y(e)),K(e)),Q(e)),U(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${l},
        ${a} > li,
        ${n},
        ${i},
        ${c},
        ${r}
      `]:Object.assign({},J(e))}}};var v=(0,F.Z)("Skeleton",e=>{const{componentCls:t}=e,n=(0,q.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[_(n)]},e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n}}),ee=e=>{const{prefixCls:t,className:n,rootClassName:l,active:a,shape:i="circle",size:c="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),s=r("skeleton",t),[g,d]=v(s),u=(0,y.Z)(e,["prefixCls","className"]),$=m()(s,`${s}-element`,{[`${s}-active`]:a},n,l,d);return g(o.createElement("div",{className:$},o.createElement(x,Object.assign({prefixCls:`${s}-avatar`,shape:i,size:c},u))))},te=e=>{const{prefixCls:t,className:n,rootClassName:l,active:a,block:i=!1,size:c="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),s=r("skeleton",t),[g,d]=v(s),u=(0,y.Z)(e,["prefixCls"]),$=m()(s,`${s}-element`,{[`${s}-active`]:a,[`${s}-block`]:i},n,l,d);return g(o.createElement("div",{className:$},o.createElement(x,Object.assign({prefixCls:`${s}-button`,size:c},u))))},M=p(5543),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},se=ne,ae=p(20165),L=function(t,n){return o.createElement(ae.Z,(0,M.Z)((0,M.Z)({},t),{},{ref:n,icon:se}))};L.displayName="DotChartOutlined";var le=o.forwardRef(L),oe=e=>{const{prefixCls:t,className:n,rootClassName:l,style:a,active:i,children:c}=e,{getPrefixCls:r}=o.useContext(b.E_),s=r("skeleton",t),[g,d]=v(s),u=m()(s,`${s}-element`,{[`${s}-active`]:i},d,n,l),$=c!=null?c:o.createElement(le,null);return g(o.createElement("div",{className:u},o.createElement("div",{className:m()(`${s}-image`,n),style:a},$)))};const ie="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var re=e=>{const{prefixCls:t,className:n,rootClassName:l,style:a,active:i}=e,{getPrefixCls:c}=o.useContext(b.E_),r=c("skeleton",t),[s,g]=v(r),d=m()(r,`${r}-element`,{[`${r}-active`]:i},n,l,g);return s(o.createElement("div",{className:d},o.createElement("div",{className:m()(`${r}-image`,n),style:a},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},o.createElement("path",{d:ie,className:`${r}-image-path`})))))},ce=e=>{const{prefixCls:t,className:n,rootClassName:l,active:a,block:i,size:c="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),s=r("skeleton",t),[g,d]=v(s),u=(0,y.Z)(e,["prefixCls"]),$=m()(s,`${s}-element`,{[`${s}-active`]:a,[`${s}-block`]:i},n,l,d);return g(o.createElement("div",{className:$},o.createElement(x,Object.assign({prefixCls:`${s}-input`,size:c},u))))},ge=p(23570),de=e=>{const t=r=>{const{width:s,rows:g=2}=e;if(Array.isArray(s))return s[r];if(g-1===r)return s},{prefixCls:n,className:l,style:a,rows:i}=e,c=(0,ge.Z)(Array(i)).map((r,s)=>o.createElement("li",{key:s,style:{width:t(s)}}));return o.createElement("ul",{className:m()(n,l),style:a},c)},me=e=>{let{prefixCls:t,className:n,width:l,style:a}=e;return o.createElement("h3",{className:m()(t,n),style:Object.assign({width:l},a)})};function B(e){return e&&typeof e=="object"?e:{}}function ue(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function he(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function pe(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const C=e=>{const{prefixCls:t,loading:n,className:l,rootClassName:a,style:i,children:c,avatar:r=!1,title:s=!0,paragraph:g=!0,active:d,round:u}=e,{getPrefixCls:$,direction:R}=o.useContext(b.E_),h=$("skeleton",t),[z,E]=v(h);if(n||!("loading"in e)){const k=!!r,S=!!s,O=!!g;let T;if(k){const N=Object.assign(Object.assign({prefixCls:`${h}-avatar`},ue(S,O)),B(r));T=o.createElement("div",{className:`${h}-header`},o.createElement(x,Object.assign({},N)))}let D;if(S||O){let N;if(S){const H=Object.assign(Object.assign({prefixCls:`${h}-title`},he(k,O)),B(s));N=o.createElement(me,Object.assign({},H))}let Z;if(O){const H=Object.assign(Object.assign({prefixCls:`${h}-paragraph`},pe(k,S)),B(g));Z=o.createElement(de,Object.assign({},H))}D=o.createElement("div",{className:`${h}-content`},N,Z)}const fe=m()(h,{[`${h}-with-avatar`]:k,[`${h}-active`]:d,[`${h}-rtl`]:R==="rtl",[`${h}-round`]:u},l,a,E);return z(o.createElement("div",{className:fe,style:i},T,D))}return typeof c!="undefined"?c:null};C.Button=te,C.Avatar=ee,C.Input=ce,C.Image=re,C.Node=oe;var $e=C,be=$e}}]);
