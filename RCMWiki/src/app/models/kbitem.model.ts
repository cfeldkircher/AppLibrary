class KnowledgebaseItem {
    itemID: number;
    productID: number;
    summary: string;
    description: string;
    enteredBy: string;
    enteredDate: string;

    constructor() {
        this.itemID = 0;
        this.productID = 0;
        this.summary = '';
        this.description = '';
        this.enteredBy = '';
        this.enteredDate = '';
    }
}
export default KnowledgebaseItem;