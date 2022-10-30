import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import useCart from 'features/cart/hooks/use-cart';
import { Dispatch, Fragment, SetStateAction } from 'react';

const Checkout = () => {
  const {
    state: { isOpen },
    dispatch,
  } = useCart();

  const handleOpenMenu = () => dispatch({ type: 'openMenu' });
  const handleCloseMenu = () => dispatch({ type: 'closeMenu' });

  return <Transition.Root as={Fragment}></Transition.Root>;
};

export default Checkout;
