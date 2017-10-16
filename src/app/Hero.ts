
export class Hero 
{
    ID: number;
    Name: string;
    EmailID: string;
    Score: number;

    constructor(id: number, name: string, emailid: string, score: number){
        this.ID = id;
        this.Name = name;
        this.EmailID = emailid;
        this.Score = score;
     }

}