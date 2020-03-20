extern crate rssol;
extern crate console_error_panic_hook;
mod utils;

use wasm_bindgen::prelude::*;
use rssol::Solitaire;
use rssol::Success;
use rssol::Failure;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct Solgame {
   sol: Solitaire,
}

#[wasm_bindgen]
impl Solgame {
   pub fn new() -> Solgame {
      console_error_panic_hook::set_once();
      let mut sg = Solgame{ sol: Solitaire::new() };
      sg.sol.new_game();
      sg
   }

   pub fn cmd(&mut self, input: &str) -> String {
      match self.sol.command(input) {
         Ok(success) => {
            match success {
               Success::Quit => "retire".to_owned(),
               Success::Help(_) => "noop".to_owned(),
               Success::Retire => "retire".to_owned(),
               Success::ValidMove(_) => "valid".to_owned(),
               Success::Victory(_) => {
                  self.sol.new_game();
                  "victory".to_owned()
               },
            }
         },
         Err(failure) => {
            match failure {
               Failure::InvalidMove => "bad_move".to_owned(),
               Failure::InvalidCommand => "invalid_command".to_owned(),
            }
         },
      }
   }

   pub fn help() -> String {
      Solitaire::get_help().to_owned()
   }

   pub fn display(&self) -> String {
      self.sol.display()
   }
}