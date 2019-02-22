import { Mixin } from "./mixin"
import { Tag } from "./tag"

export default function PasswordKnown(instance) {
  instance.mixin("passwordKnown", Mixin)
  instance.tag("password-known", false, false, false, Tag)
}
