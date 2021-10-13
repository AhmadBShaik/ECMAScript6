
export class Bird{
    constructor(name,fly=true){
        this.name = name;
        this.fly = fly;
    }

    canFly(){
        return this.fly;
    }

    get info(){
        return `${this.name} ${ this.fly ? "can" : "can't"} fly`
    }


    static noOfWings(){
        return 2;
    }
}


export class Eagle extends Bird{
    constructor(name,fly,genus){
        super(name,fly);
        this.genus = genus;
    }
}