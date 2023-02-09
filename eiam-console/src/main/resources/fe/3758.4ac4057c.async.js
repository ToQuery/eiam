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
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[3758],{36489:function(V,T,r){r.d(T,{Z:function(){return R}});var i=r(5543),M=r(79685),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},P=g,O=r(20165),n=function(W,D){return M.createElement(O.Z,(0,i.Z)((0,i.Z)({},W),{},{ref:D,icon:P}))};n.displayName="WarningOutlined";var R=M.forwardRef(n)},60979:function(V,T,r){var i=r(5543),M=r(66105),g=r(79685),P=r(57231),O=r(63342),n=["fieldProps","min","proFieldProps","max"],R=function(D,Z){var F=D.fieldProps,v=D.min,u=D.proFieldProps,o=D.max,p=(0,M.Z)(D,n);return(0,O.jsx)(P.Z,(0,i.Z)({valueType:"digit",fieldProps:(0,i.Z)({min:v,max:o},F),ref:Z,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:u},p))},m=g.forwardRef(R);T.Z=m},21574:function(V,T,r){var i=r(5543),M=r(66105),g=r(54969),P=r(83741),O=r(79685),n=r(60353),R=r(57231),m=r(63342),W=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],D=O.forwardRef(function(u,o){var p=u.fieldProps,B=u.options,A=u.radioType,x=u.layout,h=u.proFieldProps,L=u.valueEnum,s=(0,M.Z)(u,W);return(0,m.jsx)(R.Z,(0,i.Z)((0,i.Z)({valueType:A==="button"?"radioButton":"radio",ref:o,valueEnum:(0,g.h)(L,void 0)},s),{},{fieldProps:(0,i.Z)({options:B,layout:x},p),proFieldProps:h,filedConfig:{customLightMode:!0}}))}),Z=O.forwardRef(function(u,o){var p=u.fieldProps,B=u.children;return(0,m.jsx)(P.ZP,(0,i.Z)((0,i.Z)({},p),{},{ref:o,children:B}))}),F=(0,n.G)(Z,{valuePropName:"checked",ignoreWidth:!0}),v=F;v.Group=D,v.Button=P.ZP.Button,v.displayName="ProFormComponent",T.Z=v},27181:function(V,T,r){var i=r(5543),M=r(66105),g=r(54969),P=r(79685),O=r(79639),n=r(57231),R=r(63342),m=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],W=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],D=P.forwardRef(function(o,p){var B=o.fieldProps,A=o.children,x=o.params,h=o.proFieldProps,L=o.mode,s=o.valueEnum,z=o.request,G=o.showSearch,$=o.options,w=(0,M.Z)(o,m),N=(0,P.useContext)(O.Z);return(0,R.jsx)(n.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,g.h)(s),request:z,params:x,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:$,mode:L,showSearch:G,getPopupContainer:N.getPopupContainer},B),ref:p,proFieldProps:h},w),{},{children:A}))}),Z=P.forwardRef(function(o,p){var B=o.fieldProps,A=o.children,x=o.params,h=o.proFieldProps,L=o.mode,s=o.valueEnum,z=o.request,G=o.options,$=(0,M.Z)(o,W),w=(0,i.Z)({options:G,mode:L||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},B),N=(0,P.useContext)(O.Z);return(0,R.jsx)(n.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,g.h)(s),request:z,params:x,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:N.getPopupContainer},w),ref:p,proFieldProps:h},$),{},{children:A}))}),F=D,v=Z,u=F;u.SearchSelect=v,u.displayName="ProFormComponent",T.Z=u},66767:function(V,T,r){var i=r(5543),M=r(66105),g=r(79685),P=r(57231),O=r(63342),n=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],R=g.forwardRef(function(m,W){var D=m.fieldProps,Z=m.unCheckedChildren,F=m.checkedChildren,v=m.proFieldProps,u=(0,M.Z)(m,n);return(0,O.jsx)(P.Z,(0,i.Z)({valueType:"switch",fieldProps:(0,i.Z)({unCheckedChildren:Z,checkedChildren:F},D),ref:W,valuePropName:"checked",proFieldProps:v,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},u))});T.Z=R},3723:function(V,T,r){var i=r(5543),M=r(66105),g=r(79685),P=r(57231),O=r(63342),n=["fieldProps","proFieldProps"],R=["fieldProps","proFieldProps"],m="text",W=function(v){var u=v.fieldProps,o=v.proFieldProps,p=(0,M.Z)(v,n);return(0,O.jsx)(P.Z,(0,i.Z)({valueType:m,fieldProps:u,filedConfig:{valueType:m},proFieldProps:o},p))},D=function(v){var u=v.fieldProps,o=v.proFieldProps,p=(0,M.Z)(v,R);return(0,O.jsx)(P.Z,(0,i.Z)({valueType:"password",fieldProps:u,proFieldProps:o,filedConfig:{valueType:m}},p))},Z=W;Z.Password=D,Z.displayName="ProFormComponent",T.Z=Z},65855:function(V,T,r){var i=r(16431),M=r(88222),g=r(66105),P=r(17211),O=r(81033),n=r(5543),R=r(41752),m=r(85724),W=r(16337),D=r(35460),Z=r(50400),F=r(54969),v=r(25588),u=r(97973),o=r(8821),p=r(69268),B=r(65458),A=r(79603),x=r(35226),h=r(79685),L=r(53802),s=r(63342),z=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],G=["record","position","creatorButtonText","newRecordType","parentKey","style"],$=h.createContext(void 0);function w(e){var K=e.children,H=e.record,re=e.position,ne=e.newRecordType,J=e.parentKey,X=(0,h.useContext)($);return h.cloneElement(K,(0,n.Z)((0,n.Z)({},K.props),{},{onClick:function(){var Y=(0,O.Z)((0,P.Z)().mark(function oe(te){var k,q,b,U;return(0,P.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(k=(q=K.props).onClick)===null||k===void 0?void 0:k.call(q,te);case 2:if(U=C.sent,U!==!1){C.next=5;break}return C.abrupt("return");case 5:X==null||(b=X.current)===null||b===void 0||b.addEditRecord(H,{position:re,newRecordType:ne,parentKey:J});case 6:case"end":return C.stop()}},oe)}));function y(oe){return Y.apply(this,arguments)}return y}()}))}function N(e){var K,H,re=(0,D.YB)(),ne=e.onTableChange,J=e.maxLength,X=e.formItemProps,Y=e.recordCreatorProps,y=e.rowKey,oe=e.controlled,te=e.defaultValue,k=e.onChange,q=e.editableFormRef,b=(0,g.Z)(e,z),U=(0,Z.D)(e.value),ee=(0,h.useRef)(),C=(0,h.useRef)();(0,h.useImperativeHandle)(b.actionRef,function(){return ee.current});var ce=(0,B.Z)(function(){return e.value||te||[]},{value:e.value,onChange:e.onChange}),se=(0,M.Z)(ce,2),_=se[0],Pe=se[1],j=h.useMemo(function(){return typeof y=="function"?y:function(E,t){return E[y]||t}},[y]),_e=function(t){if(typeof t=="number"&&!e.name){if(t>=_.length)return t;var a=_&&_[t];return j==null?void 0:j(a,t)}if((typeof t=="string"||t>=_.length)&&e.name){var l=_.findIndex(function(d,c){var f;return(j==null||(f=j(d,c))===null||f===void 0?void 0:f.toString())===(t==null?void 0:t.toString())});return l}return t};(0,h.useImperativeHandle)(q,function(){var E=function(l){var d,c;if(l==null)throw new Error("rowIndex is required");var f=_e(l),I=[e.name,(d=f==null?void 0:f.toString())!==null&&d!==void 0?d:""].flat(1).filter(Boolean);return(c=C.current)===null||c===void 0?void 0:c.getFieldValue(I)},t=function(){var l,d=[e.name].flat(1).filter(Boolean);if(Array.isArray(d)&&d.length===0){var c,f=(c=C.current)===null||c===void 0?void 0:c.getFieldsValue();return Array.isArray(f)?f:Object.keys(f).map(function(I){return f[I]})}return(l=C.current)===null||l===void 0?void 0:l.getFieldValue(d)};return(0,n.Z)((0,n.Z)({},C.current),{},{getRowData:E,getRowsData:t,setRowData:function(l,d){var c,f,I,ie;if(l==null)throw new Error("rowIndex is required");var de=_e(l),pe=[e.name,(c=de==null?void 0:de.toString())!==null&&c!==void 0?c:""].flat(1).filter(Boolean),ge=((f=C.current)===null||f===void 0||(I=f.getFieldsValue)===null||I===void 0?void 0:I.call(f))||{},Re=(0,x.Z)(ge,pe,(0,n.Z)((0,n.Z)({},E(l)),d||{}));return(ie=C.current)===null||ie===void 0||ie.setFieldsValue(Re),!0}})}),(0,h.useEffect)(function(){e.controlled&&_.forEach(function(E,t){var a;(a=C.current)===null||a===void 0||a.setFieldsValue((0,i.Z)({},j(E,t),E))},{})},[_,e.controlled]),(0,h.useEffect)(function(){if(e.name){var E;C.current=e==null||(E=e.editable)===null||E===void 0?void 0:E.form}},[(K=e.editable)===null||K===void 0?void 0:K.form,e.name]);var S=Y||{},me=S.record,ae=S.position,Ee=S.creatorButtonText,fe=S.newRecordType,he=S.parentKey,Ce=S.style,De=(0,g.Z)(S,G),ve=ae==="top",Q=(0,h.useMemo)(function(){return J&&J<=(_==null?void 0:_.length)?!1:Y!==!1&&(0,s.jsx)(w,{record:(0,F.h)(me,_==null?void 0:_.length,_)||{},position:ae,parentKey:(0,F.h)(he,_==null?void 0:_.length,_),newRecordType:fe,children:(0,s.jsx)(o.ZP,(0,n.Z)((0,n.Z)({type:"dashed",style:(0,n.Z)({display:"block",margin:"10px 0",width:"100%"},Ce),icon:(0,s.jsx)(R.Z,{})},De),{},{children:Ee||re.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[Y,J,_==null?void 0:_.length]),Me=(0,h.useMemo)(function(){return Q?ve?{components:{header:{wrapper:function(t){var a,l=t.className,d=t.children;return(0,s.jsxs)("thead",{className:l,children:[d,(0,s.jsxs)("tr",{style:{position:"relative"},children:[(0,s.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:Q}),(0,s.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(a=b.columns)===null||a===void 0?void 0:a.length,children:Q})]})]})}}}}:{tableViewRender:function(t,a){var l,d;return(0,s.jsxs)(s.Fragment,{children:[(l=(d=e.tableViewRender)===null||d===void 0?void 0:d.call(e,t,a))!==null&&l!==void 0?l:a,Q]})}}:{}},[ve,Q]),le=(0,n.Z)({},e.editable),Oe=(0,v.J)(function(E,t){var a,l,d;if((a=e.editable)===null||a===void 0||(l=a.onValuesChange)===null||l===void 0||l.call(a,E,t),(d=e.onValuesChange)===null||d===void 0||d.call(e,t,E),e.controlled){var c;e==null||(c=e.onChange)===null||c===void 0||c.call(e,t)}});return(e!=null&&e.onValuesChange||(H=e.editable)!==null&&H!==void 0&&H.onValuesChange||e.controlled&&e!==null&&e!==void 0&&e.onChange)&&(le.onValuesChange=Oe),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($.Provider,{value:ee,children:(0,s.jsx)(L.Z,(0,n.Z)((0,n.Z)((0,n.Z)({search:!1,options:!1,pagination:!1,rowKey:y,revalidateOnFocus:!1},b),Me),{},{tableLayout:"fixed",actionRef:ee,onChange:ne,editable:(0,n.Z)((0,n.Z)({},le),{},{formProps:(0,n.Z)({formRef:C},le.formProps)}),dataSource:_,onDataSourceChange:function(t){if(Pe(t),e.name&&ae==="top"){var a,l=(0,x.Z)({},[e.name].flat(1).filter(Boolean),t);(a=C.current)===null||a===void 0||a.setFieldsValue(l)}}}))}),e.name?(0,s.jsx)(m.Z,{name:[e.name],children:function(t){var a,l,d=(0,A.default)(t,[e.name].flat(1)),c=d==null?void 0:d.find(function(f,I){return!(0,u.A)(f,U==null?void 0:U[I])});return c&&U&&(e==null||(a=e.editable)===null||a===void 0||(l=a.onValuesChange)===null||l===void 0||l.call(a,c,d)),null}}):null]})}function ue(e){var K=W.ZP.useFormInstance();return e.name?(0,s.jsx)(p.Z.Item,(0,n.Z)((0,n.Z)({style:{maxWidth:"100%"}},e==null?void 0:e.formItemProps),{},{name:e.name,children:(0,s.jsx)(N,(0,n.Z)((0,n.Z)({},e),{},{editable:(0,n.Z)((0,n.Z)({},e.editable),{},{form:K})}))})):(0,s.jsx)(N,(0,n.Z)({},e))}ue.RecordCreator=w,T.Z=ue}}]);
