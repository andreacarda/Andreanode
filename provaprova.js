const booleano=true;
const nullo=null;
const numero=2;
const stringa='ciao';
const indefinito=undefined;
const array=[];
function funzione() { };
const data= new Date;
console.log(
    typeof booleano,
    typeof nullo,
    typeof numero,
    typeof stringa,
    typeof indefinito,
    typeof array,
    typeof funzione,
    typeof data,
    
)
const carrello={
    prodotti:[
        {
            descrizione:"pomodori",
            prezzo:10,
            qty:20,
        },
        {
            descrizione:"peperoncino",
            prezzo:5,
            qty:50, 
        }
    ],
    getTotale(){
        let tot=0
        for(let i=0;i<this.prodotti.length;i++){
            const prodotto=this.prodotti[i];
            tot=tot +prodotto.prezzo*prodotto.qty;
        }
        return tot;
    }
}
console.log(carrello.getTotale());

