var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'soirialgi' : 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
        //console.log(this.list);
    }
}

grades.show();