import { Badge, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';

export const TransactionOrderDetail = ({ data }) => {
  return (
    <Box minh="220px">
      {data ? (
        <>
          <Flex>
            <Text minW="140px">Order Number </Text>:
            <Spacer />
            <Text textAlign={'end'}>{data.no_invoice}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Note </Text>:
            <Spacer />
            <Text textAlign={'end'}>{data.note}</Text>
          </Flex>
          <Flex>
            <Text minW="140px">Order Status </Text>:
            <Spacer />
            <Box>
              <Badge
                colorScheme={
                  data.status == 'Canceled'
                    ? 'red'
                    : data.status == 'Completed'
                    ? 'teal'
                    : 'yellow'
                }
                px="1rem"
              >
                {data.status}
              </Badge>
            </Box>
          </Flex>
          <Flex>
            <Text minW="140px">Order Time </Text>:
            <Spacer />
            <Text textAlign={'end'}>
              {moment(data.createdAt).format('LLL')}
            </Text>
          </Flex>
          <Flex mt="2rem">
            <Text minW="140px">Total Price </Text>:
            <Spacer />
            <Text textAlign={'end'}>
              Rp.{data.total_price?.toLocaleString('id-ID')}
            </Text>
          </Flex>
          <Flex>
            <Text minW="140px">Delivery Fee </Text>:
            <Spacer />
            <Text textAlign={'end'}>
              Rp.{data.shipping_cost?.toLocaleString('id-ID')}
            </Text>
          </Flex>
          <Flex>
            <Text minW="140px" fontWeight={'700'}>
              Total Payment{' '}
            </Text>
            :
            <Spacer />
            <Text textAlign={'end'} fontWeight={'700'}>
              Rp.{data.total_payment?.toLocaleString('id-ID')}
            </Text>
          </Flex>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
