class Product {

    ProductID: number;
    AppName: string;
    Aliases: string;
    LOB: string;
    LOBContact: string;
    DocumentationURL: string;
    VendorSupport: string;
    VendorContact: string;
    ProcessSchedule: string;
    DowntimeRisks: string;
    Comments: string;
    ProdURL: string;
    TestURL: string;
    ApplicationType: string;
    InterfacesFrom: string;
    InterfacesTo: string;
    Purpose: string;
    BusinessImpact: string;
    ImpactDetails: string;
    SourceControl: string;
    Keywords: string; 

    constructor() {
        this.ProductID = 0;
        this.AppName = '';
        this.Aliases = '';
        this.LOB = '';
        this.LOBContact = '';
        this.DocumentationURL = '';
        this.VendorSupport = '';
        this.VendorContact = '';
        this.ProcessSchedule = '';
        this.DowntimeRisks = '';
        this.Comments = '';
        this.ProdURL = '';
        this.TestURL = '';
        this.ApplicationType = '';
        this.InterfacesFrom = '';
        this.InterfacesTo = '';
        this.Purpose = '';
        this.BusinessImpact = '';
        this.ImpactDetails = '';
        this.SourceControl = '';
        this.Keywords = '';
    }
}

export default Product;