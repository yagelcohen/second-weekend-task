const array = []
    array[0] = {
        startedAt: "started At",

        finishedAt:"finished At",
        
        totalTime: "total Time",
        
        tasksGiven: "tasks Given",
        
        tasksFinished: "tasks Finished",
        
        tasksFinishedPrecent: "tasks Finished Precent",
        
        topic: "topic"

    }
    array[1] = {
        startedAt: new Date("2021-01-07:11:00"),

        finishedAt: new Date("2021-01-07:20:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 28,
        
        tasksFinished: 25,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "HTML"

    }
    array[2] = {
        startedAt: new Date("2021-01-08:14:00"),

        finishedAt: new Date("2021-01-08:20:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 22,
        
        tasksFinished: 15,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "CSS"

    }
    array[3] = {
        startedAt: new Date("2021-01-11:13:00"),

        finishedAt: new Date("2021-01-11:21:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 38,
        
        tasksFinished: 21,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        topic: "JavaScript"

    }
    array[4] = {
        startedAt: new Date("2021-01-12:13:00"),

        finishedAt: new Date("2021-01-12:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        tasksGiven: 13,
        
        tasksFinished: 13,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "GitHub"

    }
    array[5] = {
        startedAt: new Date("2021-01-13:13:00"),

        finishedAt: new Date("2021-01-13:18:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 16,
        
        tasksFinished: 14,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "Function"

    }
    array[6] = {
        startedAt: new Date("2021-01-14:13:00"),

        finishedAt: new Date("2021-01-14:23:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 19,
        
        tasksFinished: 17,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "Array"

    }
    array[7] = {
        startedAt: new Date("2021-01-17:10:00"),

        finishedAt: new Date("2021-01-17:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 21,
        
        tasksFinished: 17,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "Loops"

    }
    array[8] = {
        startedAt: new Date("2021-01-18:13:00"),

        finishedAt: new Date("2021-01-18:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 32,
        
        tasksFinished: 25,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "conditions"

    }
    array[9] = {
        startedAt: new Date("2021-01-19:13:00"),

        finishedAt: new Date("2021-01-19:22:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 16,
        
        tasksFinished: 9,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer); 
            return answer
        },
        
        topic: "switch"

    }
    array[10] = {
        startedAt: new Date("2021-01-20:15:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer);
            return answer
        },
        
        topic: "Objects"

    }
    let newArray = array.slice(1) ;
        document.write('<table>');
        document.write(`<tr> <th>${array[0].startedAt}</th><th>${array[0].finishedAt}</th>
        <th>${array[0].totalTime}</th><th>${array[0].tasksGiven}</th>
        <th>${array[0].tasksFinished}</th><th>${array[0].tasksFinishedPrecent}</th>
        <th>${array[0].topic}</th></tr>`)
        for (const criterion of newArray) {
        document.write(`<tr>  <td>${criterion.startedAt.toLocaleTimeString("it-lT",{hour:'2-digit',minute:'2-digit'})}</td><td>${criterion.finishedAt.toLocaleTimeString("it-lT",{hour:'2-digit',minute:'2-digit'})}</td>
        <td class=${timeColor(criterion.totalTime())}>${criterion.totalTime()} hours</td><td>${criterion.tasksGiven}</td>
        <td>${criterion.tasksFinished}</td><td class=${present(criterion.tasksFinishedPrecent())}>${criterion.tasksFinishedPrecent()}%</td>
        <td>${criterion.topic}</td></tr>`)
        }
        document.write('</table>');








        array[1].tasksFinishedPrecent();
        array[2].tasksFinishedPrecent();
        array[3].tasksFinishedPrecent();
        array[4].tasksFinishedPrecent();
        array[5].tasksFinishedPrecent();
        array[6].tasksFinishedPrecent();
        array[7].tasksFinishedPrecent();
        array[8].tasksFinishedPrecent();
        array[9].tasksFinishedPrecent();
        array[10].tasksFinishedPrecent();
        array[1].totalTime()
        array[2].totalTime()
        array[3].totalTime()
        array[4].totalTime()
        array[5].totalTime()
        array[6].totalTime()
        array[7].totalTime()
        array[8].totalTime()
        array[9].totalTime()
        array[10].totalTime()


      function timeColor(time){
          if(time<5){
              return "green";
          }else if (time<8) {
              return "yellow";
          }else{
              return "red";
        }
      }
      function present(x){
          if(x<60){
              return "bad";
          }else if(x<85){
              return "ok";
          }else{
              return "best";
          }
      }
      

    