drawCircle(x,y,r,block){
    var ax = x;
    var ay = y;
    var ar = r;
    for(var i = 0;i<ar;i++){
      var sqrtemp = Math.round(Math.sqrt(ar*ar-i*i))
      this.mirrorP(ax,i,ay,sqrtemp,block);
      this.mirrorP(ay,sqrtemp,ax,i,block);
      for(var j = 0;j<sqrtemp;j++){
        this.mirrorP(ax,i,ay,sqrtemp-j,block);
        this.mirrorP(ay,sqrtemp-j,ax,i,block);
      }
    }
    this.setblock(ax,ay,block)
  }
drawCircleScal(x,y,r,w,h,block){ //scaling circle
    var ax = x;
    var ay = y;
    var ar = r;
    for(var i = 0;i<ar;i++){
      var sqrtemp = Math.round(Math.sqrt(ar*ar-i*i))
      for(var wi = 0;wi<Math.round(w);wi++){
        for(var hi = 0;hi<Math.round(h);hi++){
        this.mirrorP(ax,Math.round(i*w)+wi,ay,Math.round(sqrtemp*h)+hi,block);
        for(var iyfill = 0;iyfill<Math.round(sqrtemp*h)+hi;iyfill++){
          this.mirrorP(ax,Math.round(i*w)+wi,ay,(Math.round(sqrtemp*h)+hi)-iyfill,block);
        }
        this.mirrorP(ay,Math.round(sqrtemp*w)+wi,ax,Math.round(i*h)+hi,block);
        for(var ixfill = 0;ixfill<Math.round(sqrtemp*w)+wi;ixfill++){
          this.mirrorP(ay,(Math.round(sqrtemp*w)+wi)-ixfill,ax,Math.round(i*h)+hi,block);
        }
        }
      }
      
      
    }
    this.setblock(ax,ay,block)
  }

  mirrorP(x,xm,y,ym,block){
    this.setblock(x+xm,y+ym,block)
    this.setblock(x+xm,y-ym,block)
    this.setblock(x-xm,y+ym,block)
    this.setblock(x-xm,y-ym,block)
  }
//js concept off drawing circle tehniq
//soon will be re write in C++
