axios.get('https://mncweb.herokuapp.com/table')
    .then((res)=>{
        var data = res.data.rows;
        var leader = [0,1,2,3,4];
        var leaderpoints = [data[(data.length-1)][4],data[(data.length-1)][5],data[(data.length-1)][3],data[(data.length-1)][2],data[(data.length-1)][1]];
        var j=0;
        for(j=0;j<4;j++){
            // console.log(leaderpoints[0])
            // console.log(leaderpoints[1])
            // console.log(leaderpoints[2])
            // console.log(leaderpoints[3])
            // console.log(leaderpoints[4])
            // console.log(j)
            if(parseInt(leaderpoints[j])<parseInt(leaderpoints[j+1]) ){
                // console.log('here')
                var a = leaderpoints[j+1];
                leaderpoints[j+1] = leaderpoints[j];
                leaderpoints[j] = a;
                var b = leader[j+1];
                leader[j+1]=leader[j]
                leader[j]=b
                if(j!=0){
                    j=j-2;
                } 
            }
            // console.log(j)
        }
        var name = ['Aryans','Kshatriyas','Nawabs','Peshwas','Shauryas']
        for(j=0;j<5;j++){
            document.querySelector(`.lead${j+1}pool`).innerText = name[leader[j]]
            document.querySelector(`.lead${j+1}img`).src = `img/${name[leader[j]]}.png` 
            document.querySelector(`.lead${j+1}point`).innerText = leaderpoints[j]
        }

        var i=0;
        var sum = 0;
        for(i=0;i<data.length;i++){
            var query = document.querySelector(`.event${i}`)
            var a = query.children;
            // console.log(a
            a[1].innerText = data[i][0];
            a[2].innerText = data[i][4];
            a[3].innerText = data[i][5];
            a[4].innerText = data[i][3];
            a[5].innerText = data[i][2];
            a[6].innerText = data[i][1];
        }

    })