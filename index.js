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
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "HTML"

    }
    array[2] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "CSS"

    }
    array[3] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        topic: "JavaScript"

    }
    array[4] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "GitHub"

    }
    array[5] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "Function"

    }
    array[6] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "Array"

    }
    array[7] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "Loops"

    }
    array[8] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "conditions"

    }
    array[9] = {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:  function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%"; 
            return answer
        },
        
        topic: "switch"

    }
    array[10] = {
        startedAt: new Date("2021-01-20:15:00"),

        finishedAt: new Date("2021-01-20:19:00"),
        
        totalTime:function(){
            out=Math.abs(this.finishedAt.getHours()-this.startedAt.getHours());
            out+= " hours";
            return out;
        },
        
        tasksGiven: 10,
        
        tasksFinished: 7,
        
        tasksFinishedPrecent: function(){
            let answer = 0;
            answer = (100*(this.tasksFinished/this.tasksGiven));
            answer = Math.floor(answer) + "%";
            return answer
        },
        
        topic: "Objects"

    }
        document.write('<table>');
        document.write(`<tr> <th>${array[0].startedAt}</th><th>${array[0].finishedAt}</th>
        <th>${array[0].totalTime}</th><th>${array[0].tasksGiven}</th>
        <th>${array[0].tasksFinished}</th><th>${array[0].tasksFinishedPrecent}</th>
        <th>${array[0].topic}</th></tr>`)
        for (const criterion of array.slice(1)) {
        document.write(`<tr> <td>${criterion.startedAt}</td><td>${criterion.finishedAt}</td>
        <td>${criterion.totalTime()}</td><td>${criterion.tasksGiven}</td>
        <td>${criterion.tasksFinished}</td><td>${criterion.tasksFinishedPrecent()}</td>
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

