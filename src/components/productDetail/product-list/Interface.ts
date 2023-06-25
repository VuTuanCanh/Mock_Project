export interface ProductType {
     _id: string, 
     name: string,
     brand: string, 
     gender: string, 
     category:  
       string
       ,
     price:  number,
     is_in_inventory:  boolean,
     items_left:  3,
     imageURL:string,
     slug: string,
     featured:  number,
     createdAt: string,
     updatedAt: string,
   __v: number
}


export interface ListProductType {
  data: ProductType[];
  totalPages: number;
  pageIndex: number;
  filterDisplay: any;
  displayGridIcon: boolean;
  displayBlockIcon: boolean;
  displayGridProduct: boolean;
  sorted: ProductType[];
  sortColumn: string;
  sortOrder: any;
  setDisplayGridIcon: (i: boolean) => void;
  setDisplayBlockIcon: (i: boolean) => void;
  setDisplayGridProduct: (i: boolean) => void;
  setClosePrice: (close: boolean) => void;
  setCloseCategory: (close: boolean) => void;
  onSort: (path: string) => void;
  setPageIndex: (number: number) => void;
}
export interface renderPriceFilterType {
  displayPrice: boolean;
  max: number;
  rangePrice: string;
  min: number;
  handlePriceRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface renderCategoryFilterType {
  selected: string;
  handleCategory: (value: string) => void;
}
export interface tagFilterType {
  value: string;
}
export interface renderTagType {
  data: tagFilterType[];
}
export interface GridAndBlockIconType {
  displayGridIcon: boolean;
  displayBlockIcon: boolean;
  displayGridProduct: boolean;
  sorted: ProductType[];
  sortColumn: string;
  sortOrder: any;
  setDisplayGridIcon: (i: boolean) => void;
  setDisplayBlockIcon: (i: boolean) => void;
  setDisplayGridProduct: (i: boolean) => void;
  onSort: (path: string) => void;
}

export interface DisplayFilterType {
  filterDisplay: any;
  setClosePrice: (close: boolean) => void;
  setCloseCategory: (close: boolean) => void;
}
export interface SortType {
  sortColumn: string;
  sortOrder: any;
  onSort: (path: string) => void;
}

export interface DetailProductType {
  data: ProductType[];
}
export interface ListProductDetailType {
  data: ProductType[];
}
export interface PaginationType {
  pageIndex: number;
  totalPages: number;
  setPageIndex: (number: number) => void;
}
export interface sizeFilterType {
  value: string;
  label: string;
}

