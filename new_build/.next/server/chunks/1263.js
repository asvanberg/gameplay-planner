"use strict";exports.id=1263,exports.ids=[1263],exports.modules={11263:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(5492),l=a(79366),i={findMultipliersWithMinPercentage:function(e,t,a){let o=[],l=0;function backtrack(i,r,n){if(l++,i===t.length){let l=n.reduce((e,a,o)=>e+a*t[o],0);l>=a*e&&o.push([...n]);return}let s=Math.floor((e-r)/t[i]);for(let a=0;a<=s;a++)n[i]=a,r+a*t[i]<e&&backtrack(i+1,r+a*t[i],n)}return backtrack(0,0,[]),console.log(l),o},calcGrowthTime:function(e,t){let a=l.Z.createDecimal(t.originalShopGrowingBonus);a=l.Z.divideDecimal(a,1+.05*t.originalShopGrowingLevel),a=l.Z.multiplyDecimal(a,1+.05*t.shopGrowingSpeed).toNumber();let o=Math.floor(e.TimeNeeded/e.prestigeBonus/a);return o<10?10:o},calcPlantHarvest:function(e,t){return o.Z.roundInt((1+e.Rank)*Math.pow(1.05,e.Rank))*Math.pow(1.02,e.prestige)*t.manualHarvestBonus},calcShopProdBonus:function(e,t){return t=t||0===t?t:e.FarmingShopPlantTotalProduction,l.Z.pow(1.25,t)},calcProdOutput:function(e,t){let a=e.totalMade,o=t.shopProdBonus,i=e.prestige,r=l.Z.createDecimal(t.originalShopProdBonus);r=l.Z.divideDecimal(r,this.calcShopProdBonus(null,t.originalShopProdLevel)),r=l.Z.multiplyDecimal(o,r);let n=e.futureMult,s=l.Z.multiplyDecimal(l.Z.multiplyDecimal(l.Z.multiplyDecimal(a,n),r),l.Z.createDecimal(Math.pow(1.02,i)));return 1===e.ID&&(s=l.Z.multiplyDecimal(s,t.hpBonus)),s},calcFryOutput:function(e,t){if(!e||e.lessThan(1e16))return 0;let a=0,o=t.timePassed?t.timePassed:0;o>1800&&(a=o<86400?o/86400:1+(o-86400)/(172800+.5*(o-86400)));let i=l.Z.logDecimal(e,10),r=l.Z.subtractDecimal(i,15.75),n=i;n=n.lessThan(31)?n:31;let s=l.Z.subtractDecimal(36,n),c=l.Z.subtractDecimal(i,16),u=l.Z.pow(1.15,c),m=l.Z.multiplyDecimal(r,s),p=l.Z.multiplyDecimal(m,u),d=l.Z.createDecimal(t.fryBonus),h=l.Z.multiplyDecimal(p,d);return l.Z.multiplyDecimal(h,a)},calcCarryOverEXP_OLD:function({plant:e,numAutos:t,expTick:a}){let o=0,l=1;if(t>1){let i=a/t,r=Math.ceil((e.reqExp-e.curExp)/i);if(t>r){o=(t-r)*i;let a=10+5*(e.Rank+l)*Math.pow(1.05,e.Rank+l);for(;o>a;)o-=a,l++,a=10+5*(e.Rank+l)*Math.pow(1.05,e.Rank+l)}else o=0}else o=0;let i=10+5*(e.Rank+l)*Math.pow(1.05,e.Rank+l);return{leftOver:o,numLevels:l,reqExp:i}},calcCarryOverEXP:function({plant:e,numAutos:t,expTick:a}){let o=0,l=e.curExp+t*a,i=10+5*(e.Rank+o)*Math.pow(1.05,e.Rank+o);for(;l>=i;)l-=i,o++,i=10+5*(e.Rank+o)*Math.pow(1.05,e.Rank+o);return{leftOver:l,numLevels:o,reqExp:i}},calcEXPBonus:function(e){let t=e.originalRankLevelBonus,a=e.originalShopRankLevel,o=e.shopRankLevel,i=e.originalPotionRank,r=e.potionRank,n=l.Z.createDecimal(t);return n=l.Z.divideDecimal(n,1+.1*a),n=l.Z.divideDecimal(n,i>0?1.5:1),n=l.Z.multiplyDecimal(n,1+.1*o),n=(n=l.Z.multiplyDecimal(n,r)).toNumber()},futureMultBD:function(e,t){return l.Z.pow(1+.05*(1+.02*t.manualHarvestFormula),l.Z.logDecimal(e.created,1.25))},calcFutureMult:function(e,t){let a=!1===t.string?e:JSON.parse(JSON.stringify(e)),o=!1===t.string?t:JSON.parse(JSON.stringify(t)),i=o.time,r=o.numAuto||o?.numAuto===0?o.numAuto:1,n=this.calcEXPBonus(o),s=a.prestigeBonus*n;if(a.growthTime=this.calcGrowthTime(a,o),0===r){let e=this.calcProdOutput(a,o);return a.production=e,a}for(;i>0;){a.timeToLevel=this.calcTimeTillLevel(a,o);let e=0,t=!1;a.timeToLevel>i?e=i:(e=a.timeToLevel,t=!0),i-=e,a.elapsedTime+=e;let n=0;if(a.elapsedTime>=a.growthTime){n=Math.floor(a.elapsedTime/a.growthTime);let e=a.perHarvest*n*r;if(a.created=l.Z.addDecimal(a.created,e),a.totalMade=l.Z.addDecimal(a.totalMade,e),a.futureMult=this.futureMultBD(a,o),t){let e=this.calcCarryOverEXP({plant:a,expTick:s*n,numAutos:r});a.curExp=e.leftOver,a.Rank+=e.numLevels,a.perHarvest=this.calcPlantHarvest(a,o),a.reqExp=e.reqExp}else{let e=n*s*r,t=a.curExp+e;a.curExp=t}a.elapsedTime=a.elapsedTime%a.growthTime}}let c=this.calcProdOutput(a,o);return a.production=c,a},calcTimeTillLevel:function(e,t){let a=t.numAuto||t?.numAuto===0?t.numAuto:1;if(0===a)return 1/0;let o=e.reqExp-e.curExp,l=this.calcEXPBonus(t);return Math.ceil(o/(e.prestigeBonus*l*a))*e.growthTime-e.elapsedTime},getNextShopCosts:function(e){let t=1,a=e.FarmingShopPlantTotalProduction||0===e.FarmingShopPlantTotalProduction?e.FarmingShopPlantTotalProduction:e.shopProdLevel,o=1,i=e.FarmingShopPlantGrowingSpeed||0===e.FarmingShopPlantGrowingSpeed?e.FarmingShopPlantGrowingSpeed:e.shopGrowingSpeed,r=e.FarmingShopPlantRankExpEarned||0===e.FarmingShopPlantRankExpEarned?e.FarmingShopPlantRankExpEarned:e.shopRankLevel,n=l.Z.pow(1.05,a-50),s=l.Z.multiplyDecimal(100,n),c=l.Z.pow(s,a),u=l.Z.multiplyDecimal(1e8,c);return{prodCost:t=a>50?u:l.Z.multiplyDecimal(1e8,l.Z.pow(100,a)),growthCost:l.Z.multiplyDecimal(l.Z.pow(500,i),1e10),expCost:l.Z.multiplyDecimal(l.Z.pow(250,r),1e15)}},calcMaxPrestige:function(e){let t=e.prestige,a=0,o=!0;for(;o;){let l=10*Math.pow(2,t),i=a+l;e.created.greaterThanOrEqualTo(i)?(t++,a+=l):o=!1}return t-e.prestige},calcTimeTillPrestige:function(e,t){let a=JSON.parse(JSON.stringify(e));this.resetPlantBD(a);let o=JSON.parse(JSON.stringify(t));this.resetModifiersBD(o);let i=o.numAuto||o?.numAuto===0?o.numAuto:1,r=!1,n=0,s=0,c=this.calcEXPBonus(o),u=a.prestigeBonus*c;for(;!r;){let e=this.calcTimeTillLevel(a,o),t=10*Math.pow(2,a.prestige),c=s+t,m=l.Z.subtractDecimal(c,a.created),p=l.Z.multiplyDecimal(l.Z.divideDecimal(m,a.perHarvest*i).ceil(),a.growthTime).ceil().toNumber();if(0===i&&m.greaterThan(0))r=!0,n=1/0;else if(p<=0)r=!0,n<=0&&(a.prestige++,r=!1,s+=t);else if(p>e){a.elapsedTime+=e;let t=Math.floor(a.elapsedTime/a.growthTime);a.created=l.Z.addDecimal(a.created,t*a.perHarvest*i),a.totalMade=l.Z.addDecimal(a.totalMade,t*a.perHarvest*i);let r=this.calcCarryOverEXP({plant:a,numAutos:i,expTick:u*t});a.Rank+=r.numLevels,a.curExp=r.leftOver,a.reqExp=r.reqExp,a.perHarvest=this.calcPlantHarvest(a,o),n+=e,a.elapsedTime=a.elapsedTime%a.growthTime}else{r=!0,a.elapsedTime+=p;let e=Math.floor(a.elapsedTime/a.growthTime);a.created=l.Z.addDecimal(a.created,e*a.perHarvest*i),a.totalMade=l.Z.addDecimal(a.totalMade,e*a.perHarvest*i),n+=p,a.elapsedTime=a.elapsedTime%a.growthTime}}return{remainingTime:n,prestige:a.prestige,prestiged:r}},resetPlantBD:function(e){e.totalMade=e?.totalMade?.mantissa||e?.totalMade?.mantissa===0?e.totalMade:l.Z.createDecimal(e.totalMade),e.created=e?.created?.mantissa||e?.created?.mantissa===0?e.created:l.Z.createDecimal(e.created),e.production=e?.production?.mantissa||e?.production?.mantissa===0?e.production:l.Z.createDecimal(e.production),e.futureMult=l.Z.createDecimal(e.futureMult)},resetModifiersBD:function(e){e.shopProdBonus=e?.shopProdBonus?.mantissa||e?.shopProdBonus?.mantissa===0?e.shopProdBonus:l.Z.createDecimal(e.shopProdBonus),e.hpBonus=e?.hpBonus?.mantissa||e?.hpBonus?.mantissa===0?e.hpBonus:l.Z.createDecimal(e.hpBonus),e.curPotatoes=e?.curPotatoes?.mantissa||e?.curPotatoes.mantissa===0?e.curPotatoes:l.Z.createDecimal(e.curPotatoes),e.totalPotatoes=e?.totalPotatoes?.mantissa||e?.totalPotatoes?.mantissa===0?e.totalPotatoes:l.Z.createDecimal(e.totalPotatoes)},calcHPProd:function(e,t){let a=JSON.parse(JSON.stringify(e));for(let e=0;e<a.length;e++)this.resetPlantBD(a[e]);let r=JSON.parse(JSON.stringify(t));this.resetModifiersBD(r),r.nextCosts.prodCost=l.Z.createDecimal(r.nextCosts.prodCost),r.nextCosts.growthCost=l.Z.createDecimal(r.nextCosts.growthCost),r.nextCosts.expCost=l.Z.createDecimal(r.nextCosts.expCost);let n=r.numAutos,s=r.time,c=r.startTime?r.startTime:0,u=r.runningTime?r.runningTime:0,m=r.maxSteps?r.maxSteps:100,p=r.tickStart?r.tickStart:0,d=r.tickRate?r.tickRate:60,h=r.dataPointThreshold?r.dataPointThreshold:s/d<m?1:o.Z.roundInt(s/d/m),g=[],P=[],Z=r.totalPotatoes,f=r.curPotatoes,D=Array(a.length).fill(0);for(let e=0;e<a.length;e++)D[e]=a[e].production;let T=0,v=!1,B=1;for(d>2&&(B=.95);T<s/d||v;T++){let e=0;for(let t=a.length-1;t>=0;t--){let o=a[t],i=t===a.length-1?0:d>1?l.Z.multiplyDecimal(l.Z.addDecimal(D[t+1],a[t+1].production),.5*d*B):l.Z.multiplyDecimal(a[t+1].production,d);o.totalMade=l.Z.addDecimal(o.totalMade,i),1===(o=this.calcFutureMult(o,{...r,time:d,numAuto:n[t],string:!1})).ID&&(e=D[t]),D[t]=o.production}r.timePassed+=d,r.potionRank>1&&!r.forceRankPotion&&(r.potionRankTime-=d,r.potionRankTime<0&&(r.potionRank=1));let t=o.Z.roundInt(T*d+c),m=d>1?l.Z.multiplyDecimal(l.Z.addDecimal(e,a[0].production),.525*d*B):a[0].production;if(Z=l.Z.addDecimal(Z,m),f=l.Z.addDecimal(f,m),r.autoBuyPBC){let e=!1,t=!0;for(;t;)if(t=!1,!0===f.greaterThanOrEqualTo(r.nextCosts.prodCost)&&(f=l.Z.subtractDecimal(f,r.nextCosts.prodCost),r.shopProdLevel++,r.shopProdBonus=this.calcShopProdBonus(r,r.shopProdLevel),e=!0,t=!0),!0===f.greaterThanOrEqualTo(r.nextCosts.growthCost)&&(f=l.Z.subtractDecimal(f,r.nextCosts.growthCost),r.shopGrowingSpeed++,e=!0,t=!0),!0===f.greaterThanOrEqualTo(r.nextCosts.expCost)&&(f=l.Z.subtractDecimal(f,r.nextCosts.expCost),r.shopRankLevel++,r.shopRankEXP=1+.1*r.shopRankLevel,e=!0,t=!0),e){let e=this.getNextShopCosts(r);r.nextCosts=e}}if(T%h==0&&t>=p&&t<=s+u&&(g.push({time:t,production:Z}),P.push({time:t,fries:l.Z.multiplyDecimal(i.calcFryOutput(Z,r),1.05)})),!r.skipFinal){if(v&&t>=s+u)break;!v&&t<s+u&&(v=!0)}}if(T>0&&!r.skipFinal){let e=o.Z.roundInt(T*d+c);if(r.passedTime=T*d+c,0===g.length)g.push({time:e,production:Z}),P.push({time:e,fries:l.Z.multiplyDecimal(i.calcFryOutput(Z,r),1.05)});else if(g[g.length-1].production!==Z&&e>s+u){let t=e-g[g.length-1].time,a=l.Z.divideDecimal(l.Z.subtractDecimal(Z,g[g.length-1].production),t),o=s+u-g[g.length-1].time,n=l.Z.addDecimal(g[g.length-1].production,l.Z.multiplyDecimal(a,o)),c={time:g[g.length-1].time+o,production:n};g.push(c),P.push({time:g[g.length-1].time+o,fries:l.Z.multiplyDecimal(i.calcFryOutput(Z,r),1.05)}),Z=n}}return{totalPotatoes:Z,potatoeProduction:a[0].production,plants:a,nextCosts:r.nextCosts,dataPointsPotatoes:g,dataPointsFries:P,finalModifiers:r}},calcStepHPProd:function(e,t){let a=JSON.parse(JSON.stringify(e));for(let e=0;e<a.length;e++)this.resetPlantBD(a[e]);let l=JSON.parse(JSON.stringify(t));this.resetModifiersBD(l);let i=l.steps,r=-1,n=[],s=[],c=0,u=l.maxSteps?l.maxSteps:100,m=l.tickRate?l.tickRate:60,p=t.time/m<u?1:o.Z.roundInt(t.time/m/u);for(let e=0;e<i.length;e++)0!==i[e].time&&((l=(r=this.calcHPProd(a,{...l,numAutos:i[e].autos,time:i[e].time,dataPointThreshold:p,startTime:n.length>0?n[n.length-1].time:0,runningTime:c,skipFinal:e<i.length-1,tickStart:n.length>0?n[n.length-1].time+p*m:0})).finalModifiers).totalPotatoes=r.totalPotatoes,a=r.plants,n=n.concat(r.dataPointsPotatoes),s=s.concat(r.dataPointsFries),i[e].obj={text:`P${i.length-e} for ${i[e].time}`,numAutos:i[e].autos,time:i[e].time},c+=i[e].time);return -1===r?(r={}).dataPointsPotatoes=n:r.dataPointsPotatoes=n,r.dataPointsFries=s,r.steps=i,r},calcAssemblyHP:function(e){let t=1;return e?.AssemblerCollection[0].BonusList[0].StartingLevel<=e?.AssemblerCollection[0].Level&&(t=Math.pow(1+e?.AssemblerCollection[0].BonusList[0].Gain,e?.AssemblerCollection[0].Level-e?.AssemblerCollection[0].BonusList[0].StartingLevel)),t},calcAssembly:function(e,t,a){let o=1;return e?.AssemblerCollection[t].BonusList[a].StartingLevel<=e?.AssemblerCollection[t].Level&&(o=Math.pow(1+e?.AssemblerCollection[t].BonusList[a].Gain,Math.max(0,e.AssemblerCollection[t].Level-(e.AssemblerCollection[t].BonusList[a].StartingLevel-1)))),o},calcAssemblyLine:function(e,t){let a=1;return e.StartingLevel<=t&&(a=Math.pow(1+e.Gain,Math.max(0,t-(e.StartingLevel-1)))),a},calcAssemblyCost:function(e,t){l.Z.createDecimal(-1);let a=l.Z.createDecimal(t.AssemblyCostReductionBonus),o=t.AssemblerCollection[e],i=l.Z.createDecimal(o.BaseCost),r=l.Z.addDecimal(i,l.Z.multiplyDecimal(i,o.Level)),n=1+o.CostExpo+o.CostExpo*o.Level*.02,s=l.Z.createDecimal(n),c=l.Z.pow(s,o.Level);return l.Z.divideDecimal(l.Z.multiplyDecimal(r,c),a)},calcProteinPerSecond:function(e){let t=l.Z.createDecimal(e.ProteinBonus),a=l.Z.createDecimal(e.FrenchFriesTotal),o=l.Z.createDecimal(1);if(a.greaterThan(1e10)){let e=l.Z.logDecimal(a,5);e=l.Z.subtractDecimal(e,13.48);let i=l.Z.logDecimal(a,10);i=l.Z.subtractDecimal(i,8),o=l.Z.multiplyDecimal(l.Z.multiplyDecimal(e,l.Z.pow(1.1,i)),t)}return o},calcContagionBonus:function(e,t){let a=1;return e.GrasshopperCollection[t].Locked>0&&(a*=Math.pow(1+.01*o.Z.calcPOW(e.GrasshopperCollection[t].BaseBonus),o.Z.calcPOW(e.GrasshopperCollection[t].Level))),a},calcExpeditionHP:function(e){let t=1;if(e.ExpeditionsCollection[16].Locked>0){let a=e.ExpeditionsCollection[16];t=Math.pow(1+a.BonusPower,a.Room-1)}return t},calcUniqueHPBonus:function(e){let t=1;for(let a=0;a<e.FarmingShopUniqueHealthy.length;a++)t*=e.FarmingShopUniqueHealthy[a]+1;return t},calcFriesHPBonus:function(e){return 1*(1+o.Z.calcPOW(e.FrenchFriesTotal)*((.01*e.FarmingShopFriesHealthyBonus+.1)*this.calcContagionBonus(e,5)))},calcPetHPBonus:function(e){let t=1,a=e.EquipedPetID,l=e.PetsCollection,i={};for(let e=0;e<a.length;e++)a[e]>0&&(i[a[e]]=!0);for(let e=0;e<l.length;e++){let a=l[e];if(a.ID in i)for(let e=0;e<a.BonusList.length;e++){let l=a.BonusList[e];23===l.ID&&(t+=.5*((Math.pow(1+l.Gain,a.Level)-1+Math.max(0,(.005*o.Z.calculateLogarithm(1.0125,a.Level+1)-1)*.5))*(1+.005*o.Z.calculateLogarithm(1.075,a.Rank+1))))}}return t},calcHPBonus:function(e){return o.Z.calcPOW(e.HealthyPotatoBonus)}};let r=i}};