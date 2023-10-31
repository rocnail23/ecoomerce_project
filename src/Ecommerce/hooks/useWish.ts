import { Product } from "../../interfaces/InterfacesForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks"
import { switchWish } from "../../store/slices/wish.slice"

export const useWish = () => {

    const {wishProducts} = useAppSelector(state => state.wishList)
    const dispatch = useAppDispatch()

    const addOrRemoveWish = (product:Product) => {
        dispatch(switchWish(product))
    }

    return {
        wishProducts,
        addOrRemoveWish
    }

}