"use strict";
{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".ooo ");  //監視する3つ物取得



  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}

{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }
  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".aaa , .img2 , .aa1 , .lol , .timeline , .access1 , .tot, footer");  //監視する3つ物取得

 

  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}

{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".pic1  ,   .qqq");  //監視する3つ物取得



  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}

{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".desc ");  //監視する3つ物取得



  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}


