class KnowledgebaseComment {
    commentID: number;
    itemID: number;
    comment: string;
    enteredBy: string;
    enteredDate: string;

    constructor() {
        this.commentID = 0;
        this.itemID = 0;
        this.comment = '';
        this.enteredBy = '';
        this.enteredDate = '';
    }
} export default KnowledgebaseComment;