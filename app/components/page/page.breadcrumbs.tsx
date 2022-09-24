import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Breadcrumb, BreadcrumbItem, Flex, Icon } from "@chakra-ui/react";
import { Link, useMatches } from "@remix-run/react";

export const PageBreadcrumbs = () => {
  const items = useMatches().filter((m) => !!m.handle);
  const iconColor = items.length > 1 ? "blue.500" : "gray.500";

  return (
    <Flex alignItems="center">
      {items[0].handle?.icon && (
        <Icon
          as={items[0].handle?.icon as any}
          mr="2"
          fontSize="xl"
          color={iconColor}
        />
      )}

      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
        {items
          .filter((m) => !!m.handle)
          .map((m, i) => {
            const last = i === items.length - 1;
            return (
              <BreadcrumbItem
                key={m.pathname}
                fontSize="large"
                isCurrentPage={last}
              >
                {last ? (
                  <Text fontSize="lg" color="gray.500">
                    {m.handle?.breadcrumb}
                  </Text>
                ) : (
                  <Link to={m.pathname}>
                    <Text fontSize="lg" color="blue.500" cursor="pointer">
                      {m.handle?.breadcrumb}
                    </Text>
                  </Link>
                )}
              </BreadcrumbItem>
            );
          })}
      </Breadcrumb>
    </Flex>
  );
};
