import * as Select from '@radix-ui/react-select';

import { Fragment } from 'react'
import {
  ClockIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  GlobeAltIcon
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react';
import ReactCountryFlag from 'react-country-flag';

import { useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const emailTemplate: any = {
  mailTo: "gu.presoti@gmail.com",
  subject: {
    BR: "Oportunidade de Trabalho",
    US: "Job Opportunity",
    other: "Job Opportunity"
  },
  body: {
    BR: "Olá Gustavo,%0D%0A%0D%0AVi o seu portfólio e gostaria de fazer uma proposta.%0D%0A%0D%0AAtenciosamente,",
    US: "Dear Gustavo,%0D%0A%0D%0AI saw your portfolio and would like to make you an offer. %0D%0A%0D%0ABest regards,",
    other: "Dear Gustavo,%0D%0A%0D%0AI saw your portfolio and would like to make you an offer. %0D%0A%0D%0ABest regards,"
  }
}

export function OpenToWorkCard() {
  const [value, setValue] = useState("BR");

  return (
    <div className="flex flex-col items-center my-10 mt-20">
        <div className="min-w-0 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:truncate sm:text-3xl sm:tracking-tight">
            Open To Work
          </h2>
          
          <div className="mt-1 flex sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <Select.Root name="countries" onValueChange={setValue} defaultValue="BR">
              <Select.Trigger className="px-2 py-1 flex space-x-1 items-center rounded text-sm mt-2 text-gray-400">
                <Select.Value />
                <Select.Icon className="text-gray-500">
                  <CaretDown size={16} />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className='bg-gray-500 w-full rounded shadow-xl overflow-hidden'>
                  <Select.ScrollUpButton>
                    <CaretUp />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="min-h-10">
                    <Select.Item value="BR" className='flex items-center justify-center hover:bg-gray-600 h-10'>
                      <Select.ItemText>
                        <ReactCountryFlag countryCode="BR" svg className="text-2xl mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      </Select.ItemText>
                    </Select.Item>

                    <Select.Item value="US" className='flex items-center justify-center hover:bg-gray-600 h-10'>
                      <Select.ItemText>
                        <ReactCountryFlag countryCode="US" svg className="text-2xl mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      </Select.ItemText>
                    </Select.Item>

                    <Select.Item value="other" className='text-gray-100 flex items-center justify-center hover:bg-gray-600 h-10'>
                      <Select.ItemText>Other</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                  <Select.ScrollDownButton>
                    <CaretDown />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {value === "BR" ? "Integral" : "Full-time"}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {value === "BR" ? "Remoto" : "Remote"}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {value === "BR" ? "R$4k - R$5k" : "$1.5k - $2k"}
            </div>
          </div>
        </div>
        <div className="mt-5 flex">
          <span className="ml-3 hidden sm:block">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://google.com")
              }}
              
            >
              <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              Curriculum
            </button>
          </span>


          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700"
              onClick={(event) => {
                event.preventDefault();
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailTemplate.mailTo}&su=${emailTemplate.subject[value]}&body=${emailTemplate.body[value]}`);
              }}
              formTarget="_blank"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {value === "BR" ? "Contato" : "Contact"}
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Mais
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
  )
}