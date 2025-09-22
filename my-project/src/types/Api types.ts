export interface Meta {
    hits: number;
    offset: number;
    time: number
}

export interface Article {
    abstract?: string;
    byline?: any;
    desk?:string;
    document_type: string;
    headline: any;
    keywords?: any;
    multimedia?: any;
    news_desk?: string;
    print_page?: number | null;
    print_section?: string | null;
    pub_date: string;
    section_name: string;
    snippet: string;
    source: string;
    subsection_name?: string | null;
    type_of_material: string;
    uri: string;
    web_url: string;
    word_count: number;
    _id?: string;

    // lead_paragraph?: string;
  
    // slideshow_credits?: string | null;
    // blog?: unknown;
    // first_page?: string | null;
    // last_page?: string | null;
    // edition?: string | null;
    // material_type_facet?: string;
    // subsection_facet?: string;
    // article_type?: string;
}

export interface DataContents {
    status: string;
    copyright: string;
    response: {
        docs: Array<Article>;
        meta: Meta;
    };
}