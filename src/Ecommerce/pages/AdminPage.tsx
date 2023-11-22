import { ListCard } from '../components/ListCard'
import { Card } from '../components/Card'
import { Filter } from '../components/Filter'
import { useFilter } from '../hooks/useFilter';
import { useModal } from '../hooks/useModal';
import ReactModal from '../components/Modal';


export const AdminPage = () => {

    const {changeProducts,filterProducts} = useFilter()
    const {closeModal,modalIsOpen,openModal} = useModal()


  return (
    <>
    <div className='wishesPage'>
    <h3 className="title_3 teko">Admin Products</h3>
    <hr className="m-b2" />
    <button 
    className='btn-black btn_newProduct teko'
    onClick={openModal}>add Product</button>
    <Filter
        changeProducts={changeProducts}
        className="m-b2"
    />
    <ListCard>
    {filterProducts.map(product => (
       <Card 
       key={product.id}
       admin 
       product={product}
       openModal={openModal}/>
    )) }
    </ListCard>
    </div>

<ReactModal 
closeModal={closeModal}
modalIsOpen={modalIsOpen}
openModal={openModal}/>
</>
  )
}
