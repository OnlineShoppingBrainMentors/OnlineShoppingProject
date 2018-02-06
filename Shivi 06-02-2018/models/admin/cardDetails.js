class CardDetails{
    constructor(cardno,cardholdername,cvv,cardtype,expirydate,cardprovider,bank,branch){
        this.cardno=cardno;
        this.cardholdername=cardholdername;
        this.cvv=cvv;
        this.cardtype=cardtype;
        this.expirydate=expirydate;
        ths.cardprovider=cardprovider;
        this.bank=bank;
        this.branch=branch;
    }
}
module.exports=CardDetails;