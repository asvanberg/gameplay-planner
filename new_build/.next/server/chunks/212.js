"use strict";exports.id=212,exports.ids=[212,989],exports.modules={46212:(t,e,a)=>{var o=a(11263),s=a(92989),i=a(5492);self.onmessage=({data:{data:t,id:e,data1:a}})=>{try{let e=t.finalPlants;for(let t=0;t<e.length;t++){let a=e[t];a.created=s.Z.createDecimal(a.created),a.totalMade=s.Z.createDecimal(a.totalMade),a.production=s.Z.createDecimal(a.production)}let a=t.modifiers;a.shopProdBonus=s.Z.createDecimal(a.shopProdBonus),a.hpBonus=s.Z.createDecimal(a.hpBonus),a.curPotatoes=s.Z.createDecimal(a.curPotatoes),a.totalPotatoes=s.Z.createDecimal(a.totalPotatoes);let n=t.mode,r=t.time,c=t.numSimulatedAutos?t.numSimulatedAutos:1,l=t.combinations,p=s.Z.createDecimal(0),m={},u=s.Z.createDecimal(0),d={},P=0,h={potatoeProduction:0},f=0,D={potatoeProduction:0},g={...a,time:3600*r},b=[],T=[],Z=0,v=t.end-t.start;for(let a=t.start;a<=t.end;a++){let s,w;v--,Z++;let M=l[a];switch(g.numAutos=M,n){case"afk":default:s=o.Z.calcHPProd(e,g);break;case"carlo":s=o.Z.calcStepHPProd(e,{...g,steps:M});break;case"step":0===M[0]&&0===M[1]&&0===M[2]&&0===M[3]&&M[4];let S=[],x=0,A=0,B=0;for(let e=0;e<M.length;e++)M[e]>0&&(A++,B+=M[e]*t.baseTimers[e]);let C=3600*r-B;for(let a=0;a<t.baseTimers.length;a++){M[a]>0&&x++;let o=Array(t.baseTimers.length).fill(0);o[a]=c,o.reverse();let s=M[a]*t.baseTimers[a];if(x===A&&M[a]>0)s+=C;else if(M[a]>0){let t=e[e.length-1-a],o=s%t.growthTime;if(o<=.5*t.growthTime)s-=o,C+=o;else{let e=t.growthTime-o;C>=e&&(s+=e,C-=e)}}S.push({time:i.Z.roundInt(s),autos:o})}s=o.Z.calcStepHPProd(e,{...g,steps:S})}let q=0,y=0;for(let t=0;t<s.plants.length;t++){let e=o.Z.calcMaxPrestige(s.plants[t]);q+=e,y+=Math.pow(1.02,s.plants[t].prestige+e)-Math.pow(1.02,s.plants[t].prestige),s.plants[t].picIncrease=e}!0===s.totalPotatoes.greaterThanOrEqualTo(p)&&(p=s.totalPotatoes,m={combo:M,result:s,plants:s.plants},b.unshift({data:s.dataPointsPotatoes,result:p}),b.length>10&&b.pop(),T.unshift({data:s.dataPointsFries,result:p}),T.length>10&&T.pop()),!0===s.potatoeProduction.greaterThanOrEqualTo(u)&&(u=s.potatoeProduction,d={combo:M,result:s,plants:s.plants}),q>P?(w={combo:M,result:s,plants:s.plants,potatoeProduction:s.potatoeProduction,picGain:q,picStats:{picLevel:q,picPercent:y}},P=q,h=w):q===P&&s.potatoeProduction.greaterThanOrEqualTo(h.potatoeProduction)&&(w={combo:M,result:s,plants:s.plants,potatoeProduction:s.potatoeProduction,picGain:q,picStats:{picLevel:q,picPercent:y}},P=q,h=w),y>f?(w={combo:M,result:s,plants:s.plants,potatoeProduction:s.potatoeProduction,picGain:y,picStats:{picLevel:q,picPercent:y}},f=y,D=w):y===f&&s.potatoeProduction.greaterThanOrEqualTo(D.potatoeProduction)&&(w={combo:M,result:s,plants:s.plants,potatoeProduction:s.potatoeProduction,picGain:y,picStats:{picLevel:q,picPercent:y}},f=y,D=w),Z%100==0&&self.postMessage({update:!0,temp:w,updateAmount:100})}self.postMessage({update:!0,updateAmount:v}),self.postMessage({success:!0,totalPotCombo:m,bestProdCombo:d,bestPicCombo:h,bestPICPercCombo:D,top10DataPointsPotatoes:b,top10DataPointsFries:T})}catch(t){console.log(t)}}},92989:(t,e,a)=>{a.d(e,{Z:()=>s});var o=a(23367);let s={createDecimal:function(t){return new o.Z(t.mantissa||0===t.mantissa?`${t.mantissa}e${t.exponent}`:t)},multiplyDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).times(e)},divideDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).dividedBy(e)},addDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).plus(e)},subtractDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).minus(e)},logDecimal:function(t,e){return t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),this.createDecimal(t.log(e))},pow:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).pow(e)},min:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),e=e.mantissa||0===e.mantissa?e:this.createDecimal(e),t.greaterThan(e))?e:t},max:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),e=e.mantissa||0===e.mantissa?e:this.createDecimal(e),t.greaterThan(e))?t:e}}}};