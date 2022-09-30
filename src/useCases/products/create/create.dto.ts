interface ICreateProductDTO {
  title: string;
  decription: string;
  image: string;
  categories?: Array<any>
  size?: string;
  color?: string;
  price: number;
}

export { ICreateProductDTO };