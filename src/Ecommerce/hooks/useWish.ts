import axiosClient from "../../apis/axiosclient";
import { Product } from "../../interfaces/InterfacesForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import {
  addWish,
  deleteWish,
  setWishList,
} from "../../store/slices/wish.slice";

export const useWish = () => {
  const { wishProducts } = useAppSelector((state) => state.wishList);
  const dispatch = useAppDispatch();



  const addOrDeleteWish = async(product: Product) => {
    try {
      if (wishProducts[product.id]) {
        await axiosClient.delete(`/product/wishlist/${product.id}`,{withCredentials:true})
  
        dispatch(deleteWish(product));
      } else {
         await axiosClient.post(`/product/wishlist/${product.id}`,{},{withCredentials:true})
      
        
        dispatch(addWish(product));
      }
    } catch (error) {
        console.log(error)
    }
  };

  const getWishProducts = async () => {
    try {
      const { data } = await axiosClient("/wishlist",{withCredentials:true});
      const wishList: { [key: number]: Product } = {};
      for (let product of data) {
        wishList[product.id] = product;
      }
      dispatch(setWishList(wishList));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    wishProducts,
    getWishProducts,
    addOrDeleteWish,
  };
};
