import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer'; // Import the produce function directly
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: [],

        addToCart: (Data) =>

          // console.log(Data.cart[0].storeName)
          set(
            produce((state) => {
              const existingItemIndex = state.cart.findIndex(
                (item) => item.storeName === Data.storeName
              );

              if (existingItemIndex !== -1) {
                // If the item with the same StoreName exists, check and update its info array
                const existingItem = state.cart[existingItemIndex];
                const existingInfoIndex = existingItem.info.findIndex(
                  (item) => item.name === Data.info[0].name
                );

                if (existingInfoIndex !== -1) {
                  // If the item with the same name exists in info, increase its quantity
                  existingItem.info[existingInfoIndex].quantity += 1;
                } else {
                  // If not, add a new item to the info array
                  existingItem.info.push(...Data.info);
                }
              } else {
                // If not, add a new item to the cart
                state.cart.push(Data);
              }
            })
          ),

          decreaseQunatity: (Data) => {
            set(
              produce((state) => {
                const existingItemIndex = state.cart.findIndex(
                  (item) => item.storeName === Data.storeName
                );
          
                if (existingItemIndex !== -1) {
                  // If the item with the same StoreName exists
                  const existingItem = state.cart[existingItemIndex];
                  const existingInfoIndex = existingItem.info.findIndex(
                    (item) => item.name === Data.info[0].name
                  );
          
                  if (existingInfoIndex !== -1) {
                    // If the item with the same name exists in info
                    existingItem.info[existingInfoIndex].quantity -= 1;
          
                    if (existingItem.info[existingInfoIndex].quantity === 0) {
                      // If the quantity reaches 0, remove the item from the info array
                      existingItem.info.splice(existingInfoIndex, 1);
                    }
                  }
          
                  if (existingItem.info.length === 0) {
                    // If there are no more items in the info array, remove the entire item from the cart
                    state.cart.splice(existingItemIndex, 1);
                  }
                }
              })
            );
          },
          

        removeFromCart: (index) =>
          set(
            produce((state) => {
              state.cart.splice(index, 1);
            })
          ),

        updateCart: ({ index, updatedData }) =>
          set(
            produce((state) => {
              // Update the item at the specified index with new data
              state.cart[index] = { ...state.cart[index], ...updatedData };
            })
          ),

        clearCart: () =>
          set(
            produce((state) => {
              // Clear the entire cart
              state.cart = [];
            })
          ),
      }),

      {
        name: 'cart-storage',
        getStorage: () => ({
          setItem: async (key, value) => {
            try {
              await AsyncStorage.setItem(key, value);
            } catch (error) {
              console.error('AsyncStorage setItem error:', error);
            }
          },
          removeItem: async (key) => {
            try {
              await AsyncStorage.removeItem(key);
            } catch (error) {
              console.error('AsyncStorage removeItem error:', error);
            }
          },
          getItem: async (key) => {
            try {
              const value = await AsyncStorage.getItem(key);
              return value;
            } catch (error) {
              console.error('AsyncStorage getItem error:', error);
              return null;
            }
          },
        }),
      }
    )
  )
);
