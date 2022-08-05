// event
import { NewTetherToken, TetherTokenTransfer} from '../generated/TetherToken/TetherToken'
// entity
import { Token, Transfer} from '../generated/schema'

export function handleNewTetherToken(event: NewTetherToken): void {
  //let token = new Token(event.params.id.toHex())
  //gravatar.owner = event.params.owner
  //gravatar.displayName = event.params.displayName
  //gravatar.imageUrl = event.params.imageUrl
  //gravatar.save()
  let token = new Token(event.params._name)
  token.symbol = event.params._symbol
  token.save()
}

export function handleTransfer(event: TetherTokenTransfer): void {
  let transfer = new Transfer(event.params._to.toString());
  transfer.value = event.params._value.toString()
  transfer.save()
}