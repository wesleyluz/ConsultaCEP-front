"use strict";(self.webpackChunkconsulta_front=self.webpackChunkconsulta_front||[]).push([[557],{2557:(ne,D,v)=>{v.r(D),v.d(D,{PesquisacepModule:()=>b});var T=v(6895),R=v(6773);function F(n,o,e,t,s,a,l){try{var m=n[a](l),i=m.value}catch(h){return void e(h)}m.done?o(i):Promise.resolve(i).then(t,s)}function Z(n){return function(){var o=this,e=arguments;return new Promise(function(t,s){var a=n.apply(o,e);function l(i){F(a,t,s,l,m,"next",i)}function m(i){F(a,t,s,l,m,"throw",i)}l(void 0)})}}var g=v(433),U=v(6990),r=v(8256),z=v(3421),G=v(1481);const O=new r.OlP("ngx-mask config"),L=new r.OlP("new ngx-mask config"),j=new r.OlP("initial ngx-mask config"),Y={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new r.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},W=["Hh:m0:s0","Hh:m0","m0:s0"],Q=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let q=(()=>{class n{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,a,l)=>{let m=[],i="";if(Array.isArray(a)){const d=new RegExp(a.map(u=>"[\\^$.|?*+()".indexOf(u)>=0?`\\${u}`:u).join("|"));m=t.split(d),i=t.match(d)?.[0]??""}else m=t.split(a),i=a;const h=m.length>1?`${i}${m[1]}`:"";let c=m[0];const k=this.separatorLimit.replace(/\s/g,"");k&&+k&&(c="-"===c[0]?`-${c.slice(1,c.length).slice(0,k.length)}`:c.slice(0,k.length));const _=/(\d+)(\d{3})/;for(;s&&_.test(c);)c=c.replace(_,"$1"+s+"$2");return void 0===l?c+h:0===l?c:c+h.substr(0,l+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const a=this.suffix.substr(s,this.suffix?.length);if(t.includes(a)&&(s-1<0||!t.includes(this.suffix.substr(s-1,this.suffix?.length))))return t.replace(a,"")}return t},this.checkInputPrecision=(t,s,a)=>{if(s<1/0){if(Array.isArray(a)){const i=a.find(h=>h!==this.thousandSeparator);a=i||a[0]}const l=new RegExp(this._charToRegExpExpression(a)+`\\d{${s}}.*$`),m=t.match(l);m&&m[0].length-1>s&&(t=t.substring(0,t.length-(m[0].length-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],a,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,a]=t;return this.customPattern=a,this.applyMask(e,s)}applyMask(e,t,s=0,a=!1,l=!1,m=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,h="",c=!1,k=!1,_=1,d=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const u=e.toString().split("");"IP"===t&&(this.ipError=u.filter(p=>"."===p).length<3&&u.length<7,t="099.099.099.099");const C=[];for(let p=0;p<e.length;p++)e[p]?.match("\\d")&&C.push(e[p]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==C.length&&14!==C.length,t=C.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const p=this.getPrecision(t);e=this.checkInputPrecision(e,p,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),h=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!l?e.slice(1,e.length):e,l&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const p=this._charToRegExpExpression(this.thousandSeparator);let f='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(p,"");if(Array.isArray(this.decimalMarker))for(const y of this.decimalMarker)f=f.replace(this._charToRegExpExpression(y),"");else f=f.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+f+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const A=this.getPrecision(t),H=(e=this.checkInputPrecision(e,A,this.decimalMarker)).replace(new RegExp(p,"g"),"");h=this._formatWithSeparators(H,this.thousandSeparator,this.decimalMarker,A);const $=h.indexOf(",")-e.indexOf(","),x=h.length-e.length;if(x>0&&","!==h[s]){k=!0;let y=0;do{this._shift.add(s+y),y++}while(y<x)}else 0!==$&&s>0&&!(h.indexOf(",")>=s&&s>3)||!(h.indexOf(".")>=s&&s>3)&&x<=0?(this._shift.clear(),k=!0,_=x,this._shift.add(s+=x)):this._shift.clear()}else for(let p=0,f=u[0];p<u.length&&i!==t.length;p++,f=u[p])if(this._checkSymbolMask(f,t[i])&&"?"===t[i+1])h+=f,i+=2;else if("*"===t[i+1]&&c&&this._checkSymbolMask(f,t[i+2]))h+=f,i+=3,c=!1;else if(this._checkSymbolMask(f,t[i])&&"*"===t[i+1])h+=f,c=!0;else if("?"===t[i+1]&&this._checkSymbolMask(f,t[i+2]))h+=f,i+=3;else if(this._checkSymbolMask(f,t[i])){if("H"===t[i]&&Number(f)>2){i+=1,this._shiftStep(t,i,u.length),p--,this.leadZeroDateTime&&(h+="0");continue}if("h"===t[i]&&"2"===h&&Number(f)>3){i+=1,p--;continue}if("m"===t[i]&&Number(f)>5){i+=1,this._shiftStep(t,i,u.length),p--,this.leadZeroDateTime&&(h+="0");continue}if("s"===t[i]&&Number(f)>5){i+=1,this._shiftStep(t,i,u.length),p--,this.leadZeroDateTime&&(h+="0");continue}const S=31;if("d"===t[i]&&(Number(f)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>S||"/"===e[i+1])){i+=1,this._shiftStep(t,i,u.length),p--,this.leadZeroDateTime&&(h+="0");continue}if("M"===t[i]){const H=0===i&&(Number(f)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),$=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),x=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),y=Number(e.slice(i-3,i-1))>S&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,ae=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(f)>1&&this.leadZeroDateTime||H||$||x||y||ae){i+=1,this._shiftStep(t,i,u.length),p--,this.leadZeroDateTime&&(h+="0");continue}}h+=f,i++}else-1!==this.maskSpecialCharacters.indexOf(t[i])?(h+=t[i],i++,this._shiftStep(t,i,u.length),p--):this.maskSpecialCharacters.indexOf(f)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(u[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(h+=u[i]),i++,p--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(f)===this.maskExpression[i+2]&&c||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(f)===this.maskExpression[i+2]&&c?(i+=3,h+=f):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(f)<0&&f!==this.placeHolderCharacter&&(d=!0);h.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(h+=t[t.length-1]);let E=s+1;for(;this._shift.has(E);)_++,E++;let P=a&&!t.startsWith("separator")?i:this._shift.has(s)?_:0;d&&P--,m(P,k),_<0&&this._shift.clear();let I=!1;l&&(I=u.every(p=>this.maskSpecialCharacters.includes(p)));let N=`${this.prefix}${I?"":h}${this.suffix}`;return 0===h.length&&(N=`${this.prefix}${h}`),N}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,s)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===s&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const a=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(a=>a!==s).includes(e):e===t}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(O))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),B=(()=>{class n extends q{constructor(e,t,s,a){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=a,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=l=>{}}applyMask(e,t,s=0,a=!1,l=!1,m=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]:"";let h="";if(this.hiddenInput&&!this.writingValue){let d=this.actualValue.split("");""!==e&&d.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>d.length?d.splice(this.selStart,0,i):e.length<d.length&&(d.length-e.length==1?d.splice(this.selStart-1,1):d.splice(this.selStart,this.selEnd-this.selStart))):d=[],this.showMaskTyped&&(e=this.removeMask(e)),h=this.actualValue.length&&d.length<=e.length?this.shiftTypedSymbols(d.join("")):e}h=Boolean(h)&&h.length?h:e;const c=super.applyMask(h,t,s,a,l,m);if(this.actualValue=this.getActualValue(c),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(d=>!this._compareOrIncludes(d,this.decimalMarker,this.thousandSeparator))),this.formControlResult(c),!this.showMaskTyped)return this.hiddenInput&&c&&c.length?this.hideInput(c,this.maskExpression):c;const k=c.length,_=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const d=this._numberSkipedSymbols(c);return c+_.slice(k+d)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?c+_:c+_.slice(k)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),a=0;for(;null!=s;)a+=1,s=t.exec(e);return a}applyValueChanges(e,t,s,a=(()=>{})){const l=this._elementRef.nativeElement;l.value=this.applyMask(l.value,this.maskExpression,e,t,s,a),l!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,a)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]]?.symbol?this.maskAvailablePatterns[t[a]]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,a)=>this._checkSymbolMask(s,this.maskExpression[a])||this.maskSpecialCharacters.includes(this.maskExpression[a])&&s===this.maskExpression[a]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,l)=>{if(this.maskSpecialCharacters.includes(e[l+1])&&e[l+1]!==this.maskExpression[l+1])return t=a,e[l+1];if(t.length){const m=t;return t="",m}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++)e[s]?.match("\\d")&&t.push(e[s]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let l=0;l<e.length;l++)e[l]?.match("\\d")&&a.push(e[l]);return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?s.slice(17===e.length?16:15,s.length):a.length>12&&a.length<=14?s.slice(a.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let s=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(s=s.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(T.K0),r.LFG(O),r.LFG(r.SBq),r.LFG(r.Qsj))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})(),K=(()=>{class n{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new r.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=a=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:a,prefix:l,suffix:m,thousandSeparator:i,decimalMarker:h,dropSpecialCharacters:c,hiddenInput:k,showMaskTyped:_,placeHolderCharacter:d,shownMaskExpression:u,showTemplate:C,clearIfNotMatch:E,validation:P,separatorLimit:I,allowNegativeNumbers:N,leadZeroDateTime:p,triggerOnMaskChange:f}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,A)=>S.length-A.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}a&&a.currentValue&&(this._maskService.maskAvailablePatterns=a.currentValue),l&&(this._maskService.prefix=l.currentValue),m&&(this._maskService.suffix=m.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),h&&(this._maskService.decimalMarker=h.currentValue),c&&(this._maskService.dropSpecialCharacters=c.currentValue),k&&(this._maskService.hiddenInput=k.currentValue),_&&(this._maskService.showMaskTyped=_.currentValue),d&&(this._maskService.placeHolderCharacter=d.currentValue),u&&(this._maskService.shownMaskExpression=u.currentValue),C&&(this._maskService.showTemplate=C.currentValue),E&&(this._maskService.clearIfNotMatch=E.currentValue),P&&(this._maskService.validation=P.currentValue),I&&(this._maskService.separatorLimit=I.currentValue),N&&(this._maskService.allowNegativeNumbers=N.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),p&&(this._maskService.leadZeroDateTime=p.currentValue),f&&(this._maskService.triggerOnMaskChange=f.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||Q.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(W.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s].optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(l=>l===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){!e&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let a=0,l=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,h)=>{this._justPasted=!1,a=i,l=h}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let m=this._position?this._inputValue.length+s+a:s+("Backspace"!==this._code||l?a:0);m>this._getActualInputLength()&&(m=this._getActualInputLength()),m<0&&(m=0),t.setSelectionRange(m,m),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const l=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==l&&(t.value=l),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault(),8===e.keyCode&&!t.readOnly&&0===t.selectionStart&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return Z(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,a)=>{if(this._start="{"===s?a:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=a;const l=Number(e.slice(this._start+1,this._end));return t+new Array(l+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(T.K0),r.Y36(B),r.Y36(O))},n.\u0275dir=r.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&r.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[r._Bn([{provide:g.JU,useExisting:(0,r.Gpc)(()=>n),multi:!0},{provide:g.Cf,useExisting:(0,r.Gpc)(()=>n),multi:!0},B]),r.TTD]}),n})();function X(n,o){return o instanceof Function?{...n,...o()}:{...n,...o}}let V=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:L,useValue:e},{provide:j,useValue:Y},{provide:O,useFactory:X,deps:[j,L]},q]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ee(n,o){1&n&&(r.TgZ(0,"small",14),r._uU(1," Esse campo precisa de no m\xednimo 9 caracteres. "),r.qZA())}function te(n,o){1&n&&(r.TgZ(0,"small",14),r._uU(1," Esse campo \xe9 obrigat\xf3rio "),r.qZA())}function se(n,o){if(1&n&&(r.TgZ(0,"div"),r.YNc(1,ee,2,0,"small",13),r.YNc(2,te,2,0,"small",13),r.qZA()),2&n){const e=r.oxw();r.xp6(1),r.Q6J("ngIf",e.formSearch.controls.CEP.hasError("minlength")),r.xp6(1),r.Q6J("ngIf",e.formSearch.controls.CEP.hasError("required"))}}function ie(n,o){if(1&n&&r._UZ(0,"iframe",15),2&n){const e=r.oxw();r.Q6J("src",e.IframeUrl,r.uOi)}}J.KeyboardEvent||(J.KeyboardEvent=function(n,o){});class w{ngOnInit(){}constructor(o,e,t){this.fb=o,this.pesquisaService=e,this.sanitizer=t,this.ceps=new U.x,this.displayIframe=!1,this.formSearch=this.fb.group({CEP:["",[g.kI.minLength(8),g.kI.required]],logradouro:[""],complemento:[""],bairro:[""],UF:["",[g.kI.maxLength(2)]],unidade:[""]})}pesquisarCEP(){var o=this;return Z(function*(){o.pesquisaService.buscarCEP(o.formSearch.value.CEP).subscribe(e=>{o.ceps=e,o.validateInfos()})})()}validateInfos(){if(null!=this.ceps.uf)return this.IframeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com.br/maps?q=${this.ceps.cep},%20Brasil&output=embed`),void(this.displayIframe=!0);this.displayIframe=!1,alert("Cep inv\xe1lido")}}w.\u0275fac=function(o){return new(o||w)(r.Y36(g.qu),r.Y36(z.U),r.Y36(G.H7))},w.\u0275cmp=r.Xpm({type:w,selectors:[["app-pesquisacep"]],decls:17,vars:19,consts:[[1,"search__title"],[1,"search__container"],[1,"search-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite seu CEP","formControlName","CEP","mask","00000-000",3,"dropSpecialCharacters","value"],[4,"ngIf"],["type","text","placeholder","Digite o logradouro","formControlName","logradouro",3,"value"],["type","text","placeholder","Complemento","formControlName","complemento",3,"value"],["type","text","placeholder","Bairro","formControlName","bairro",3,"value"],["type","text","placeholder","UF","formControlName","UF","maxlength","2",3,"value"],["type","number","placeholder","Unidade","formControlName","unidade",3,"value"],["type","submit",3,"disabled"],[1,"Iframe"],["height","650","width","500","style","border:0;","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",3,"src",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"error-message"],["height","650","width","500","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0",3,"src"]],template:function(o,e){1&o&&(r.TgZ(0,"h2",0),r._uU(1,"Pesquise seu CEP"),r.qZA(),r.TgZ(2,"section",1)(3,"form",2),r.NdJ("ngSubmit",function(){return e.pesquisarCEP()}),r._UZ(4,"input",3),r.YNc(5,se,3,2,"div",4),r._UZ(6,"input",5)(7,"input",6)(8,"input",7)(9,"input",8)(10,"input",9),r.TgZ(11,"button",10),r._uU(12,"Pesquisar"),r.qZA()(),r.TgZ(13,"address",11),r.YNc(14,ie,1,1,"iframe",12),r.TgZ(15,"p"),r._uU(16),r.qZA()()()),2&o&&(r.xp6(3),r.Q6J("formGroup",e.formSearch),r.xp6(1),r.ekj("valid",e.formSearch.controls.CEP.valid)("invalid",e.formSearch.controls.CEP.invalid&&(e.formSearch.controls.CEP.touched||e.formSearch.controls.CEP.dirty)),r.s9C("value",e.formSearch.value.CEP),r.Q6J("dropSpecialCharacters",!1),r.xp6(1),r.Q6J("ngIf",e.formSearch.controls.CEP.invalid&&(e.formSearch.controls.CEP.touched||e.formSearch.controls.CEP.dirty)),r.xp6(1),r.s9C("value",e.ceps.logradouro),r.xp6(1),r.s9C("value",e.ceps.complemento),r.xp6(1),r.s9C("value",e.ceps.bairro),r.xp6(1),r.s9C("value",e.ceps.uf),r.xp6(1),r.s9C("value",e.ceps.unidade),r.xp6(1),r.Q6J("disabled",e.formSearch.invalid),r.xp6(3),r.Q6J("ngIf",e.displayIframe),r.xp6(2),r.HOy("",e.ceps.logradouro,", ",e.ceps.localidade," - ",e.ceps.uf,", ",e.ceps.cep,""))},dependencies:[T.O5,g._Y,g.Fj,g.wV,g.JJ,g.JL,g.nD,g.sg,g.u,K],styles:[".search__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.search-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.search__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]});const re=[{path:"",component:w}];class M{}M.\u0275fac=function(o){return new(o||M)},M.\u0275mod=r.oAB({type:M}),M.\u0275inj=r.cJS({imports:[R.Bz.forChild(re),R.Bz]});class b{}b.\u0275fac=function(o){return new(o||b)},b.\u0275mod=r.oAB({type:b}),b.\u0275inj=r.cJS({imports:[T.ez,M,g.UX,V.forRoot()]})}}]);