extern crate rssol;
extern crate console_error_panic_hook;
mod utils;

use wasm_bindgen::prelude::*;
use rssol::Solitaire;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn greet() -> String {
   "Hello, you fool!".to_owned()
}

#[wasm_bindgen]
pub struct Solgame {
   data: String,
   sol: Solitaire,
}

#[wasm_bindgen]
impl Solgame {
   pub fn new() -> Solgame {
      console_error_panic_hook::set_once();
      let mut sg = Solgame{ data: "Hello, other fool!".to_owned(), sol: Solitaire::new() };
      sg.sol.new_game();
      sg
   }

   pub fn help() -> String {
      Solitaire::get_help().to_owned()
   }

   pub fn display(&self) -> String {
      self.sol.display()
   }

   pub fn msg(&self) -> String {
      self.data.clone()
   }
}