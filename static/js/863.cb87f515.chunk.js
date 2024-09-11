"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[863],{43863:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var a,r=s(46687),n=s(19854),o=s(77431),l=s(4088),i=s(93460),d=s(28742),u=s(12942),p=s(63699),c=s(1777),f=s(11820),h=function(){var e=(0,o.default)((function*(e){var t=e.sdk,s=e.testChain,a=e.connectId,r=e.deviceId,n=e.passphraseState,o=e.useEmptyPassphrase,l=e.showOnOneKey,i=void 0!==l&&l;return"evm"===s?yield t.evmGetAddress(a,r,{path:"m/44'/60'/0'/0/0",showOnOneKey:i,passphraseState:n,useEmptyPassphrase:o}):"dot"===s?yield t.polkadotGetAddress(a,r,{path:"m/44'/354'/0'/0'/0'",prefix:"0",network:"polkadot",showOnOneKey:i,passphraseState:n,useEmptyPassphrase:o}):"ada"===s?yield t.cardanoGetAddress(a,r,{addressParameters:{addressType:0,path:"m/1852'/1815'/0'/0/0",stakingPath:"m/1852'/1815'/0'/2/0"},protocolMagic:764824073,networkId:1,derivationType:1,address:"",showOnOneKey:i,isCheck:!1,passphraseState:n,useEmptyPassphrase:o}):yield t.btcGetAddress(a,r,{path:"m/44'/0'/0'/0/0",coin:"btc",showOnOneKey:i,passphraseState:n,useEmptyPassphrase:o})}));return function(t){return e.apply(this,arguments)}}(),m=(f.default.create({container:{width:"100%"},subContainer:{width:"100%",marginTop:16,padding:10,backgroundColor:"#FFF",borderColor:"#E0E0E0",borderWidth:1,borderRadius:8},fullItem:{width:"100%"},resultItem:{width:"100%",flexDirection:"row"},item:{margin:16},input:{borderColor:"#E0E0E0",borderWidth:1,borderRadius:4,padding:6,margin:2,fontSize:16},switchContainer:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:8},responseInput:{backgroundColor:"#f7f7f7",minHeight:200}}),s(32718)),v=s(85985),g=s(38837),_=s(93335),y=s(12528),S=s(71420),P=s(55298),x=s(76005),b=s(68743),w=s(34103).StyleSheet.create({0:{width:"100%"},1:{gap:8},2:{flexDirection:"column"},3:{flexDirection:"row",gap:8,flexWrap:"wrap"}}),E=s(34103).View;s(34103).Text;function j(e){var t;return`$A& b${(null!=(t=null==e?void 0:e.length)?t:0)+1}`}function T(e){var t=e.value,s=e.testCoin,a=e.deviceFeatures,n=(0,c.default)(),o=(0,r.useCallback)((function(){var e=[];e.push(`# Passphrase Count Test (${s})`),e.push("## Device Info");var r=(0,P.getDeviceInfo)(a,void 0);e.push("| Key | Value |"),e.push("| --- | --- |"),Object.keys(r).forEach((function(t){var s=r[t];s&&e.push(`| ${t} | ${s} |`)})),e.push(""),e.push(t);var n=Date.now(),o=`Passphrase Count Test (${s})${n}.md`;(0,y.downloadFile)(o,e.join("\n").toString())}),[a,s,t]);return(0,b.jsx)(g.Button,{variant:"primary",onPress:o,children:n.formatMessage({id:"action__export_report"})})}function $(){var e=(0,c.default)(),t=(0,r.useContext)(m.default).sdk,s=(0,n.useDevice)().selectedDevice,f=(0,x.useHardwareInputPinDialog)().openDialog,y=(0,r.useState)("btc"),P=(0,i.default)(y,2),$=P[0],M=P[1],I=(0,r.useState)(!1),R=(0,i.default)(I,2),k=R[0],O=R[1],C=(0,r.useState)([]),A=(0,i.default)(C,2),V=A[0],D=A[1],U=(0,r.useRef)(),W=(0,r.useCallback)((function(e){D((function(t){return 0===t.length?[e.join("")]:[].concat((0,l.default)(t.slice(0,t.length-1)),[`${t[t.length-1]}${e.join("")}`])}))}),[]),N=(0,r.useCallback)((function(e){D((function(t){return[].concat((0,l.default)(t),[e.join("")])}))}),[]),G=(0,r.useRef)(!1),L=(0,r.useRef)(!1),H=(0,r.useRef)(),Q=(0,r.useRef)([]),z=(0,r.useCallback)((function(){a&&(null==t||t.off(d.UI_EVENT,a)),null==t||t.cancel(),L.current=!1,H.current={done:!0,payload:e.formatMessage({id:"message__test_end"})},N([e.formatMessage({id:"message__test_end"})]);try{var r;null==t||t.getFeatures(null!=(r=null==s?void 0:s.connectId)?r:"")}catch(n){}}),[t,e,N,null==s?void 0:s.connectId]),F=(0,r.useCallback)((0,o.default)((function*(){var r,n,o;if(t){var i=null!=(r=null==s?void 0:s.connectId)?r:"";D([e.formatMessage({id:"message__scan_device_doing"})]),a&&t.off(d.UI_EVENT,a);var u=yield t.getFeatures(i);if(u.success){var p=null!=(n=null==(o=u.payload)?void 0:o.device_id)?n:"";for(Q.current=[],H.current={done:!1,payload:e.formatMessage({id:"message__testing"})},D([e.formatMessage({id:"message__begin_test"})]),a=function(s){if(console.log("TopLEVEL EVENT ===>>>>: ",s),s.type===d.UI_REQUEST.REQUEST_PIN&&f(t,s.payload.device.features),s.type===d.UI_REQUEST.REQUEST_PASSPHRASE){if(!G.current)return L.current=!1,N([e.formatMessage({id:"message__test_result"}),", ",e.formatMessage({id:"message__passphrase_stop_test"}),Q.current.length.toString()]),void z();setTimeout((function(){t.uiResponse({type:d.UI_RESPONSE.RECEIVE_PASSPHRASE,payload:{value:j(Q.current)}})}),200)}},t.on(d.UI_EVENT,a),u.payload.passphrase_protection||(yield t.deviceSettings(i,{usePassphrase:!0})),U.current=u.payload,L.current=!0;L.current;){var c,m;G.current=!0;var v=`Wallet-${Q.current.length+1}`;N([e.formatMessage({id:"message__generate_wallet"}),v," => Passphrase:",`\u300c${j(Q.current)}\u300d`]);var g=yield t.getPassphraseState(i,{initSession:!0});if(!g.success){var _,y;L.current=!1,H.current={done:!0,payload:`${e.formatMessage({id:"message__generate_wallet_error"})} ${null==g||null==(_=g.payload)?void 0:_.error}`},W([e.formatMessage({id:"message__generate_wallet_error"}),null==g||null==(y=g.payload)?void 0:y.error]);break}if(!g.payload){L.current=!1,H.current={done:!0,payload:"passphrase is not enabled on the device."},z();break}var S=g.payload;W([" PassphraseState: ",S]),G.current=!1,N(["    ",e.formatMessage({id:"message__fetch"}),` ${v} `,e.formatMessage({id:"message__address"})]);var P=yield h({sdk:t,testChain:$,connectId:i,deviceId:p,passphraseState:S,showOnOneKey:k});if(!P.success){var x,b;L.current=!1,H.current={done:!0,payload:`GetAddress ${e.formatMessage({id:"message__fail"})} ${null==P||null==(x=P.payload)?void 0:x.error}`},W([e.formatMessage({id:"message__fail"}),null==P||null==(b=P.payload)?void 0:b.error]);break}for(var w of(W([`${e.formatMessage({id:"message__success"})} `,e.formatMessage({id:"message__address"}),":",null!=(c=P.payload.address)?c:""]),G.current=!1,(0,l.default)(Q.current).reverse())){var E;N(["    ",e.formatMessage({id:"message__fetch"}),` ${w.walletName} `,e.formatMessage({id:"message__address"})]);var T=yield h({sdk:t,testChain:$,connectId:i,deviceId:p,passphraseState:w.passphraseState,showOnOneKey:k});if(!T.success){var M,I;L.current=!1,H.current={done:!0,payload:`address:${w.address} passphrase:${w.passphraseState} ${$} GetAddress \u5931\u8d25 ${null==T||null==(M=T.payload)?void 0:M.error}`},W([e.formatMessage({id:"message__fail"}),null==T||null==(I=T.payload)?void 0:I.error]);break}if(w.address!==T.payload.address){var R;L.current=!1,H.current={done:!0,payload:`address:${w.address} passphrase:${w.passphraseState} ${$} GetAddress ${e.formatMessage({id:"message__address_not_match"})}!!!!`},W([e.formatMessage({id:"message__success"}),` ${e.formatMessage({id:"message__address_not_match"})} `," expect:",w.address," actual:",null!=(R=T.payload.address)?R:""]);break}W([`${e.formatMessage({id:"message__success"})} `,e.formatMessage({id:"message__address"}),":",null!=(E=T.payload.address)?E:""])}Q.current.push({walletName:v,passphraseState:S,address:null!=(m=P.payload.address)?m:""})}}else{var O;N([e.formatMessage({id:"message__get_features_error"}),null==u||null==(O=u.payload)?void 0:O.error])}}})),[t,W,e,f,N,null==s?void 0:s.connectId,k,z,$]),K=(0,r.useMemo)((function(){return(0,b.jsx)(E,{style:w[0],children:(0,b.jsx)(v.default,{value:V.join("\n"),editable:!1,placeholder:e.formatMessage({id:"label__will_response_tip"})})})}),[e,V]),B=(0,r.useMemo)((function(){var e;return!0!==(null==H||null==(e=H.current)?void 0:e.done)?null:U.current?(0,b.jsx)(T,{value:V.join("\n"),testCoin:$,deviceFeatures:U.current}):null}),[V,$]);return(0,r.useMemo)((function(){return(0,b.jsx)(_.default,{title:e.formatMessage({id:"title__passphrase_test"}),children:(0,b.jsxs)(E,{style:w[1],children:[(0,b.jsxs)(E,{style:w[2],children:[(0,b.jsx)(p.Text,{children:e.formatMessage({id:"message__passphrase_count_test_describe"})}),(0,b.jsx)(p.Text,{fontSize:14,children:e.formatMessage({id:"message__passphrase_count_test_step1"})}),(0,b.jsx)(p.Text,{fontSize:14,children:e.formatMessage({id:"message__passphrase_count_test_step2"})}),(0,b.jsx)(p.Text,{fontSize:14,children:e.formatMessage({id:"message__passphrase_count_test_step3"})})]}),(0,b.jsxs)(E,{style:w[3],children:[(0,b.jsxs)(u.Picker,{style:{width:200},selectedValue:$,onValueChange:function(e){return M(e)},children:[(0,b.jsx)(u.Picker.Item,{label:"BTC(Secp256k1)",value:"btc"}),(0,b.jsx)(u.Picker.Item,{label:"EVM(Secp256k1)",value:"evm"}),(0,b.jsx)(u.Picker.Item,{label:"DOT(ED25519)",value:"dot"}),(0,b.jsx)(u.Picker.Item,{label:"ADA",value:"ada"})]}),(0,b.jsx)(S.SwitchInput,{label:e.formatMessage({id:"label__show_on_onekey"}),value:k,onToggle:O}),(0,b.jsx)(g.Button,{variant:"primary",onPress:F,children:e.formatMessage({id:"action__start_test"})}),(0,b.jsx)(g.Button,{variant:"destructive",onPress:z,children:e.formatMessage({id:"action__stop_test"})}),B]}),K]})})}),[e,$,k,F,z,B,K])}var M=s(36111),I=s(13620),R=s(69403),k=s(21307),O=s(76847),C=s(38697),A=s(88617),V=s(61764),D=s(93302);function U(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function W(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?U(Object(s),!0).forEach((function(t){(0,M.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):U(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var N,G=s(34103).StyleSheet.create({0:{flexDirection:"row"},1:{flexDirection:"row",flexWrap:"wrap",gap:8}}),L=s(34103).View,H=(s(34103).Text,[{id:"btc Test",name:"BTC(Secp256k1) Wallet",description:"Test switch BTC wallet with different passphrase state",extra:{type:"btc"},data:[]},{id:"evm Test",name:"EVM(Secp256k1) Wallet",description:"Test switch EVM wallet with different passphrase state",extra:{type:"evm"},data:[]},{id:"dot Test",name:"Dot(ED25519) Wallet",description:"Test switch Dot wallet with different passphrase state",extra:{type:"dot"},data:[]},{id:"ada Test",name:"Ada Wallet",description:"Test switch Ada wallet with different passphrase state",extra:{type:"ada"},data:[]},{id:"multi Test",name:"MultiChain Wallet",description:"Test switch Multi wallet with different passphrase state",extra:{type:"multi"},data:[]}]);function Q(e){var t=e.item,s=(0,c.default)(),a=`${null==t?void 0:t.id} ${null==t?void 0:t.method} ${t.path} passphrase:\u300c${t.passphrase}\u300d`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L,{style:G[0],children:(0,b.jsx)(p.Text,{fontSize:14,children:a})}),(0,b.jsxs)(p.Text,{fontSize:14,children:[s.formatMessage({id:"label__expected"})," ",null==t?void 0:t.address]})]})}function z(){var e=(0,c.default)(),t=(0,O.default)({fileName:"SwitchPassphraseWallet",reportTitle:"SwitchPassphraseWalletTestReport",customReport:function(e,t){var s=[];return s.push("## Test Case"),s.push("| State | WalletName | Method | Path | Passphrase | PassphraseState | Address |"),s.push("| --- | --- | --- | --- | --- | --- | --- |"),e.forEach((function(e){var a=e,r=a.id,n=a.$key,o=a.method,l=a.path,i=a.address,d=a.passphrase,u=a.passphraseState,p=null==t?void 0:t[n].verify,c="fail"===p?null==t?void 0:t[n].error:i;s.push(`| ${p} | ${r} | ${o} | ${l} | ${d} | ${u} | ${c} |`)})),Promise.resolve(s)}}),s=t.showExportReport,a=t.exportReport;return s?(0,b.jsx)(g.Button,{variant:"primary",onPress:a,children:e.formatMessage({id:"action__export_report"})}):null}function F(e){var t,s=A.baseParams[e],a={};if(null!=s&&null!=(t=s.addressParameters)&&t.path){var r=(0,V.replaceTemplate)("0",s.addressParameters.path),n=(0,V.replaceTemplate)("0",s.addressParameters.stakingPath);a=W(W({},s),{},{addressParameters:W(W({},s.addressParameters),{},{path:r,stakingPath:n})})}else{var o=(0,V.replaceTemplate)("0",s.path);a=W(W({},s),{},{path:o})}return a}function K(){var e=(0,c.default)(),t=(0,x.useHardwareInputPinDialog)().openDialog,s=(0,r.useState)(!1),a=(0,i.default)(s,2),n=a[0],l=a[1],f=(0,r.useState)([]),h=(0,i.default)(f,2),m=h[0],v=h[1],g=(0,r.useState)(),_=(0,i.default)(g,2),y=_[0],P=_[1],w=(0,r.useState)(),E=(0,i.default)(w,2),j=E[0],T=E[1],$=(0,r.useState)(!0),M=(0,i.default)($,2),R=M[0],O=M[1],A=(0,r.useState)(!0),V=(0,i.default)(A,2),U=V[0],Q=V[1],K=(0,r.useState)(5),B=(0,i.default)(K,2),q=B[0],J=B[1],X=(0,r.useState)(20),Y=(0,i.default)(X,2),Z=Y[0],ee=Y[1],te=(0,r.useCallback)((function(e){return H.find((function(t){return t.name===e}))}),[]);(0,r.useEffect)((function(){var e=[];H.forEach((function(t){e.push(t.name)})),v(e),P(te(e[0]))}),[te]),(0,r.useEffect)((function(){y&&T(y.description)}),[y]);var se=(0,r.useRef)(""),ae=(0,k.useRunnerTest)({initHardwareListener:function(e){return N&&e.off(d.UI_EVENT,N),N=function(s){console.log("TopLEVEL EVENT ===>>>>: ",s),s.type===d.UI_REQUEST.REQUEST_PIN&&t(e,s.payload.device.features),s.type===d.UI_REQUEST.REQUEST_PASSPHRASE&&setTimeout((function(){var t;e.uiResponse({type:d.UI_RESPONSE.RECEIVE_PASSPHRASE,payload:{value:null!=(t=se.current)?t:""}})}),200)},e.on(d.UI_EVENT,N),Promise.resolve()},prepareRunner:function(){var e=(0,o.default)((function*(e,t,s,a){null!=s&&s.passphrase_protection||(yield a.deviceSettings(e,{usePassphrase:!0}))}));return function(t,s,a,r){return e.apply(this,arguments)}}(),initTestCase:function(){var t=(0,o.default)((function*(t,s){var a=t.connectId,r=t.deviceId,n=(t.printLog,[]);Array.from({length:q}).forEach((function(e,t){var s,a,r=null==y||null==(s=y.extra)?void 0:s.type;switch("multi"===r&&(r=["btc","evm","dot","ada"][t%4]),r){case"btc":a="btcGetAddress";break;case"evm":a="evmGetAddress";break;case"dot":a="polkadotGetAddress";break;case"ada":a="cardanoGetAddress";break;default:return}0===t&&R?null==n||n.push({id:`Wallet-${t}`,passphrase:"",emptyPassphraseState:!0,method:a}):null==n||n.push({id:`Wallet-${t}`,passphrase:`${t}`,method:a})}));var o=new Map;for(var l of n){var i;se.current=l.passphrase,t.printLog(`${e.formatMessage({id:"message__create"})} ${l.id}, passphrase: \u300c${l.passphrase}\u300d`);var d=yield s.getPassphraseState(a,{initSession:!0,useEmptyPassphrase:l.emptyPassphraseState});if(!d.success)return Promise.resolve(void 0);var u=d.payload,p=W(W({},F(l.method)),{},{passphraseState:u,useEmptyPassphrase:!l.passphrase}),c=yield s[l.method](a,r,p);if(!c.success)return Promise.resolve(void 0);var f=c.payload.address;o.set(l.id,{path:null!=(i=(0,I.get)(p,"path",void 0)||(0,I.get)(p,"addressParameters.path",void 0))?i:"",address:f,passphraseState:u}),t.printLog(`    ${e.formatMessage({id:"message__address"})} ${f}`)}var h,m=Array.from({length:Z}).map((function(e,t){var s,a=`${(s=U?n[t%q]:n[Math.floor(1e3*Math.random())%q]).method}-${t}`;return W(W(W({},s),o.get(s.id)),{},{$key:a})}));return m.length>0?Promise.resolve({title:null!=(h=null==y?void 0:y.name)?h:"",data:m}):Promise.resolve(void 0)}));return function(e,s){return t.apply(this,arguments)}}(),prepareRunnerTestCase:function(){var e=(0,o.default)((function*(e,t,s){return se.current=s.passphrase,Promise.resolve()}));return function(t,s,a){return e.apply(this,arguments)}}(),generateRequestParams:function(e){var t=W(W({},F(e.method)),{},{passphraseState:e.passphraseState,useEmptyPassphrase:!e.passphrase,showOnOneKey:n});return Promise.resolve({method:e.method,params:t})},processResponse:function(e,t,s){var a=e,r="";return a.address!==t.address&&(r=`actual: ${a.address}, expected: ${t.address}`),Promise.resolve({error:r})},removeHardwareListener:function(e){return N&&e.off(d.UI_EVENT,N),Promise.resolve()}}),re=ae.stopTest,ne=ae.beginTest,oe=(0,r.useMemo)((function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Text,{fontSize:13,paddingVertical:"$2",children:j}),(0,b.jsxs)(L,{style:G[1],children:[(0,b.jsx)(C.CommonInput,{type:"number",label:e.formatMessage({id:"label__wallet_count"}),value:q.toString(),onChange:function(e){return J(parseInt(e))}}),(0,b.jsx)(C.CommonInput,{type:"number",label:e.formatMessage({id:"label__wallet_change_count"}),value:Z.toString(),onChange:function(e){return ee(parseInt(e))}}),(0,b.jsx)(S.SwitchInput,{label:e.formatMessage({id:"label__wallet_include_normal"}),value:!!R,onToggle:O}),(0,b.jsx)(S.SwitchInput,{label:e.formatMessage({id:"label__wallet_sequential_switch"}),value:U,onToggle:Q}),(0,b.jsx)(S.SwitchInput,{label:e.formatMessage({id:"label__show_on_onekey"}),value:n,onToggle:l}),(0,b.jsx)(u.Picker,{style:{width:200},selectedValue:null==y?void 0:y.name,onValueChange:function(e){return P(te(e))},children:m.map((function(e,t){return(0,b.jsx)(u.Picker.Item,{label:e,value:e},`${t}`)}))}),(0,b.jsx)(D.default,{onStop:re,onStart:ne}),(0,b.jsx)(z,{})]})]})}),[ne,Z,null==y?void 0:y.name,te,R,e,U,n,re,m,j,q]);return oe}function B(){return(0,b.jsx)(_.default,{children:(0,b.jsx)(R.TestRunnerView,{title:"Passphrase Switch Wallet Test",renderExecuteView:function(){return(0,b.jsx)(K,{})},renderResultView:function(e){return(0,b.jsx)(Q,{item:e})}})})}var q=s(52456),J=s(82485),X=s(86029);function Y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function Z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(s),!0).forEach((function(t){(0,M.default)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var ee=s(34103).StyleSheet.create({0:{flexDirection:"row"},1:{flexDirection:"column"},2:{flexDirection:"column"},3:{flexDirection:"row",flexWrap:"wrap",gap:8},4:{width:"100%"}}),te=s(34103).View;s(34103).Text;function se(e){var t=e.item,s=(e.itemVerifyState,(0,c.default)()),a=`${null==t?void 0:t.id} ${null==t?void 0:t.method} ${t.path} passphrase:\u300c${t.passphrase}\u300d`;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(te,{style:ee[0],children:(0,b.jsx)(p.Text,{fontSize:14,children:a})}),(0,b.jsxs)(p.Text,{fontSize:14,children:[s.formatMessage({id:"label__expected"})," ",null==t?void 0:t.address]})]})}function ae(){var e=(0,c.default)(),t=(0,O.default)({fileName:"SpecialPassphraseTest",reportTitle:"SpecialPassphraseTestReport",customReport:function(e,t){var s=[];return s.push("## Test Case"),s.push("| State | WalletName | Method | Path | Passphrase | PassphraseState | Address |"),s.push("| --- | --- | --- | --- | --- | --- | --- |"),e.forEach((function(e){var a=e,r=a.id,n=a.$key,o=a.method,l=a.path,i=a.address,d=a.passphrase,u=a.passphraseState,p=null==t?void 0:t[n].verify,c="fail"===p?null==t?void 0:t[n].error:i;s.push(`| ${p} | ${r} | ${o} | ${l} | ${d} | ${u} | ${c} |`)})),Promise.resolve(s)}}),s=t.showExportReport,a=t.exportReport;return s?(0,b.jsx)(g.Button,{variant:"primary",onPress:a,children:e.formatMessage({id:"action__export_report"})}):null}function re(e){var t,s=A.baseParams[e],a={};if(null!=s&&null!=(t=s.addressParameters)&&t.path){var r=(0,V.replaceTemplate)("0",s.addressParameters.path),n=(0,V.replaceTemplate)("0",s.addressParameters.stakingPath);a=Z(Z({},s),{},{addressParameters:Z(Z({},s.addressParameters),{},{path:r,stakingPath:n})})}else{var o=(0,V.replaceTemplate)("0",s.path);a=Z(Z({},s),{},{path:o})}return a}var ne,oe={id:"1",name:"Special Passphrase Wallet Test",description:"Test special passphrase wallet",data:[{id:"Wallet-1",method:"btcGetAddress",passphrase:"Aa0!)_+\ub9ea\u04cd\xac}\xa8\xa5\u03f8\u0394\u046d\u0427\u309e\u304f6\u9f35"},{id:"Wallet-2",method:"btcGetAddress",passphrase:"\xa5\xd8\xff"},{id:"Wallet-3",method:"btcGetAddress",passphrase:"P@ssw\xf4rd\u20ac"},{id:"Wallet-4",method:"btcGetAddress",passphrase:" My Passphrase "},{id:"Wallet-5",method:"btcGetAddress",passphrase:"\u79c1\u306e\u30d1\u30b9\u30ef\u30fc\u30c9"},{id:"Wallet-6",method:"btcGetAddress",passphrase:"my\u0633\u064a\u0627\u0633\u0629passphrase"},{id:"Wallet-7",method:"btcGetAddress",passphrase:"\u4f60\u597dpassphrase"},{id:"Wallet-8",method:"btcGetAddress",passphrase:"mi pol\xedtica de frase de contrase\xf1a"},{id:"Wallet-9",method:"btcGetAddress",passphrase:String.fromCharCode.apply(String,(0,l.default)(Array.from({length:25},(function(e,t){return t+96}))))}]};function le(){var e=(0,c.default)(),t=(0,r.useState)(!1),s=(0,i.default)(t,2),a=s[0],n=s[1],l=(0,x.useHardwareInputPinDialog)().openDialog,u=(0,r.useState)(""),f=(0,i.default)(u,2),h=f[0],m=f[1],v=(0,r.useRef)(""),g=(0,k.useRunnerTest)({initHardwareListener:function(e){return ne&&e.off(d.UI_EVENT,ne),ne=function(t){console.log("TopLEVEL EVENT ===>>>>: ",t),t.type===d.UI_REQUEST.REQUEST_PIN&&l(e,t.payload.device.features),t.type===d.UI_REQUEST.REQUEST_PASSPHRASE&&setTimeout((function(){var t;e.uiResponse({type:d.UI_RESPONSE.RECEIVE_PASSPHRASE,payload:{value:null!=(t=v.current)?t:""}})}),200)},e.on(d.UI_EVENT,ne),Promise.resolve()},prepareRunner:function(){var t=(0,o.default)((function*(t,s,a,r){if(!h)return alert(e.formatMessage({id:"message__message_is_empty"})),Promise.reject();null!=a&&a.passphrase_protection||(yield r.deviceSettings(t,{usePassphrase:!0}))}));return function(e,s,a,r){return t.apply(this,arguments)}}(),initTestCase:function(){var t=(0,o.default)((function*(t,s){var a=oe.data,r=new Map;for(var n of a){var o;v.current=null!=(o=n.passphrase)?o:"",t.printLog(`${e.formatMessage({id:"message__create"})} ${n.id}, passphrase: \u300c${n.passphrase}\u300d`);var l=yield s.getPassphraseState(t.connectId,{initSession:!0,useEmptyPassphrase:n.emptyPassphraseState});if(!l.success)return Promise.resolve(void 0);var i=l.payload;r.set(n.id,{passphraseState:i})}var d,u=[],p=function*(s){["btcGetAddress","evmGetAddress","dnxGetAddress"].forEach((function(a){var n=re(a);try{var o,l,i,d=null==X.default||null==(o=X.default[a])?void 0:o.call(X.default,"","",Z(Z({},n),{},{mnemonic:h.trim(),passphrase:s.passphrase})),p=`${s.id}-${a}`;u.push(Z(Z(Z({},s),r.get(s.id)),{},{address:null==d||null==(l=d.payload)?void 0:l.address,path:(0,I.get)(n,"path",void 0)||(0,I.get)(n,"addressParameters.path",void 0),method:a,$key:p})),t.printLog(`${e.formatMessage({id:"message__generate"})} ${s.id} ${a} ${e.formatMessage({id:"message__address"})} ${null==d||null==(i=d.payload)?void 0:i.address}`)}catch(c){console.log("=====>>>>> error",c)}}))};for(var c of a)yield*p(c);return console.log("currentTestCases",u),u.length>0?Promise.resolve({title:null!=(d=null==oe?void 0:oe.name)?d:"",data:u}):Promise.resolve(void 0)}));return function(e,s){return t.apply(this,arguments)}}(),prepareRunnerTestCase:function(){var e=(0,o.default)((function*(e,t,s){return v.current=s.passphrase,Promise.resolve()}));return function(t,s,a){return e.apply(this,arguments)}}(),generateRequestParams:function(e){var t=Z(Z({},re(e.method)),{},{passphraseState:e.passphraseState,useEmptyPassphrase:!e.passphrase,showOnOneKey:a});return Promise.resolve({method:e.method,params:t})},processResponse:function(e,t,s){var a,r,n=e;return(null==(a=t.address)?void 0:a.toLowerCase())!==(null==(r=n.address)?void 0:r.toLowerCase())?Promise.resolve({error:`actual: ${n.address}, expected: ${t.address}`}):Promise.resolve({error:""})},removeHardwareListener:function(e){return ne&&e.off(d.UI_EVENT,ne),Promise.resolve()}}),_=g.stopTest,y=g.beginTest;return(0,r.useMemo)((function(){return(0,b.jsxs)(te,{style:ee[1],children:[(0,b.jsx)(te,{style:ee[2],children:(0,b.jsx)(p.Text,{fontSize:14,children:e.formatMessage({id:"message__passphrase_special_test_describe"})})}),(0,b.jsxs)(te,{style:ee[3],children:[(0,b.jsxs)(te,{style:ee[4],children:[(0,b.jsx)(q.Label,{paddingRight:"$0",justifyContent:"center",children:e.formatMessage({id:"label__wallet_mnemonic"})}),(0,b.jsx)(J.Input,{multiline:!0,size:"$4",keyboardType:"numeric",value:h.toString(),onChangeText:function(e){return m(e)}})]}),(0,b.jsx)(S.SwitchInput,{label:e.formatMessage({id:"label__show_on_onekey"}),value:a,onToggle:n}),(0,b.jsx)(D.default,{onStop:_,onStart:y}),(0,b.jsx)(ae,{})]})]})}),[y,e,h,a,_])}function ie(){return(0,b.jsx)(_.default,{children:(0,b.jsx)(R.TestRunnerView,{title:"Special Passphrase Test",renderExecuteView:function(){return(0,b.jsx)(le,{})},renderResultView:function(e,t){return(0,b.jsx)(se,{item:e,itemVerifyState:t})}})})}var de=s(34103).View;s(34103).Text;function ue(){return(0,b.jsx)(de,{style:[],children:(0,b.jsx)(n.DeviceProvider,{children:(0,b.jsxs)(de,{style:[],children:[(0,b.jsx)($,{}),(0,b.jsx)(B,{}),(0,b.jsx)(ie,{})]})})})}var pe=s(60968);function ce(){return(0,b.jsx)(pe.default,{children:(0,b.jsx)(x.HardwareInputPinDialogProvider,{children:(0,b.jsx)(ue,{})})})}}}]);