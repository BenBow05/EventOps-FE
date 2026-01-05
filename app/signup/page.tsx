import { Form } from "radix-ui";
import { Card } from "@radix-ui/themes";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default function SignUp() {
  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-5">
      <div className="group col-start-2 m-auto mt-5 flex items-center text-center">
        <svg
          width="45"
          height="45"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4FBBC9" />
              <stop offset="100%" stopColor="#8869D1" />
            </linearGradient>
          </defs>
          <path
            className="group-hover:fill-[url(#svgGrad)]"
            d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z"
            fill="black"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <h1 className="ml-5 text-6xl font-bold">
          <span className="group-hover:bg-linear-[25deg,#4FBBC9,#8869D1] group-hover:bg-clip-text group-hover:text-transparent">
            Hourglass
          </span>
        </h1>
      </div>
      <div className="col-start-2 row-start-2 m-auto w-100 items-center">
        <Card variant="surface">
          <Form.Root className="grid grid-rows-4 gap-10 pr-5 pl-5 text-center">
            <div className="m-auto flex items-center align-middle">
              <h1 className="text-2xl font-bold">Sign Up</h1>
            </div>
            <Form.Field className="FormField" name="email">
              <div className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message className="FormMessage" match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <div className="flex h-9 flex-nowrap items-center justify-center gap-2 rounded-sm px-3 pr-2.25 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.1)] focus-within:shadow-[0_0_0_2px_black] hover:shadow-[0_0_0_1px_black]">
                  <input
                    className="h-4.5 flex-1 border-none bg-transparent text-sm leading-none text-inherit outline-none selection:bg-black/20 selection:text-black"
                    placeholder="Enter email"
                    type="email"
                    required
                  />
                </div>
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="question">
              <div className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <PasswordToggleField.Root>
                  <div className="flex h-9 flex-nowrap items-center justify-center gap-2 rounded-sm px-3 pr-2.25 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.1)] focus-within:shadow-[0_0_0_2px_black] hover:shadow-[0_0_0_1px_black]">
                    <PasswordToggleField.Input className="h-4.5 flex-1 border-none bg-transparent text-sm leading-none text-inherit outline-none selection:bg-black/20 selection:text-black" />
                    <PasswordToggleField.Toggle className="flex aspect-square h-4.5 items-center justify-center rounded text-sm leading-none text-inherit outline-none focus-visible:outline-0 focus-visible:outline-offset-0">
                      <PasswordToggleField.Icon
                        visible={<EyeOpenIcon />}
                        hidden={<EyeClosedIcon />}
                      />
                    </PasswordToggleField.Toggle>
                  </div>
                </PasswordToggleField.Root>
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="question">
              <div className="mb-2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your password again
                </Form.Message>
              </div>
              <Form.Control asChild>
                <PasswordToggleField.Root>
                  <div className="flex h-9 flex-nowrap items-center justify-center gap-2 rounded-sm px-3 pr-2.25 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.1)] focus-within:shadow-[0_0_0_2px_black] hover:shadow-[0_0_0_1px_black]">
                    <PasswordToggleField.Input className="h-4.5 flex-1 border-none bg-transparent text-sm leading-none text-inherit outline-none selection:bg-black/20 selection:text-black" />
                    <PasswordToggleField.Toggle className="flex aspect-square h-4.5 items-center justify-center rounded text-sm leading-none text-inherit outline-none focus-visible:outline-0 focus-visible:outline-offset-0">
                      <PasswordToggleField.Icon
                        visible={<EyeOpenIcon />}
                        hidden={<EyeClosedIcon />}
                      />
                    </PasswordToggleField.Toggle>
                  </div>
                </PasswordToggleField.Root>
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <div className="w-full">
                <button className="w-full rounded-full border-2 pt-2 pr-3 pb-2 pl-3 transition-colors duration-100 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1] hover:text-white">
                  Sign Up
                </button>
              </div>
            </Form.Submit>
            <Form.Field name="Login" asChild>
              <Form.Label className="text-sm">
                <a href="/login">Already signed up?</a>
              </Form.Label>
            </Form.Field>
          </Form.Root>
        </Card>
      </div>
    </div>
  );
}
